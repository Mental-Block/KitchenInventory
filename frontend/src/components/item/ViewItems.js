import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form"

import Prompt from "root/components/Prompt";

import Item from "./Item"
import FadeAnimation from "../FadeAnimation"

import { StyledHeader, StyledItemGrid, StyledCenter } from "root/css";

import useFetch from "root/use/useFetch"

import { Input, Form, Select } from "../form"

import UserContext from "root/context/UserContext"
import customFetch from "root/function/customFetch"

import {
    StyledParagraph,
    StyledItem,
    StyledRedButton,
    StyledGreenButton,
    StyledSpaceBetween,
    StyledItemImg,
} from "root/css";

import { CATEGORIES, UNITS } from "./defaultItemData";

import removeDuplicate from "root/function/removeDuplicate"

export default function ViewItems({ ...props }) {
    if (!props.open) return null
    const [del, setDelete] = useState({ reload: false, open: false, id: null })
    const [edit, setEdit] = useState({ reload: false, open: false, id: null })

    const { data, loading } = useFetch("/api/items/all", { method: "GET", headers: { "x-auth-token": props.token } }, del.reload);

    return (
        <>

            <FadeAnimation trigger={loading} timeout={500}>
                {!loading && data.length !== 0 ?
                    <StyledItemGrid>
                        {data.map((props) => {
                            if (edit.open && edit.id === props._id) return <Edit
                                close={() => setEdit({ ...del, open: false })}
                                key={props._id}
                                {...props}
                            />
                            return (<Item
                                del={() => setDelete({ ...del, open: true, id: props._id })}
                                edit={() => setEdit({ ...del, open: true, id: props._id })}
                                key={props._id}
                                {...props}
                            />)
                        })}
                    </StyledItemGrid>
                    : <></>}
            </FadeAnimation>

            <StyledCenter>
                {!loading && data.length === 0 ? <StyledCenter><StyledHeader>No Items</StyledHeader></StyledCenter> : null}
            </StyledCenter>

            <Prompt
                open={del.open}
                close={() => setDelete({ ...del, open: false })}
                reload={() => setDelete({ ...del, reload: true })}
                message="Are you sure you want to delete this Item?"
                btnText={{ success: "YES", failed: "NO" }}
                fetch={{
                    url: `/api/items/delete/${del.id}`,
                    options: { method: "DELETE", headers: { "x-auth-token": props.token } }
                }}
            />
        </>
    )
}

const Edit = ({ ...props }) => {
    const methods = useForm({ validateCriteriaMode: "all" });
    const { userData } = useContext(UserContext);

    const categories = useFetch("/api/categories/all", { method: "GET", headers: { "x-auth-token": userData.token } });
    const units = useFetch("/api/units/all", { method: "GET", headers: { "x-auth-token": userData.token } });


    const editItem = async (data, event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        formData.append('editImage', data.editImage[0]);

        if (formData.editImage === undefined || formData.editImage === null) formData.editImage = props.imageUrl

        const response = await customFetch("/api/items", {
            method: "POST",
            headers: { "x-auth-token": props.token, },
            body: formData,
        });

        if (response.message) setErrorMessage(methods.setError, { ...response })
        else { props.close() }
    }

    return (
        <>
            <Form onSubmit={editItem} methods={methods}>
                <Input
                    sm
                    name="editTitle"
                    defaultValue={props.title}
                />

                <Input
                    sm
                    name="editImage"
                    accept="image/png, image/jpg, image/jpeg"
                    type="file"
                />

                <Input
                    sm
                    name="editQuantity"
                    type="number"
                    min="0"
                    placeholder="0"
                    defaultValue={props.quantity}
                    rules={{
                        required: {
                            value: true,
                            message: "This is field is required",
                        },
                        pattern: {
                            value: /^[0-9]*$/,
                            message: "Numbers only please",
                        },
                    }}
                />

                <Input
                    sm
                    name="editDate"
                    type="date"
                    rules={{
                        required: {
                            value: true,
                            message: "This is field is required",
                        },
                        pattern: {
                            value: /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/,
                            message: "Dates only please",
                        },
                    }}
                    defaultValue={props.expiration.substring(0, 10)}
                    min={new Date().toISOString().split("T")[0]}
                />

                <Select
                    sm
                    name="editUnit"
                    option={units.loading ? [{ name: "Loading Units..." }] : removeDuplicate([{ name: props.unitName, selected: true }, ...units.data, ...UNITS])}
                />

                <Select
                    sm
                    name="editCategory"
                    option={categories.loading ? [{ name: "Loading Categories..." }] : removeDuplicate([{ name: props.categoryName, selected: true }, ...CATEGORIES, ...categories.data,])}
                />

                <StyledSpaceBetween>
                    <StyledGreenButton sm as="input" value="Update Item" type="submit" />
                    <StyledRedButton sm onClick={props.close} type="button">Close</StyledRedButton>
                </StyledSpaceBetween>
            </Form>
        </>
    )
}
