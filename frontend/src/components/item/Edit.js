import React, { useContext, memo } from "react";
import { useForm } from "react-hook-form";

import { Input, Form, Select } from "../form"

import UserContext from "root/context/UserContext"

import useFetch from "root/use/useFetch"

import { CATEGORIES, UNITS } from "./defaultData";

import removeDuplicate from "root/function/removeDuplicate"
import customFetch from "root/function/customFetch"
import setErrorMessage from "root/function/setErrorMessage"

import { StyledRedButton, StyledGreenButton, StyledSpaceBetween } from "root/css";

export default function Edit({ ...props }) {
    const { reload, close } = props
    const { userData } = useContext(UserContext);

    const methods = useForm({ validateCriteriaMode: "all" });

    const categories = useFetch("/api/categories/all", { method: "GET", headers: { "x-auth-token": userData.token } });
    const units = useFetch("/api/units/all", { method: "GET", headers: { "x-auth-token": userData.token } });

    const editItem = async (data, event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        if (data.editImage.length === 0) formData.append("editImage", props.imageUrl)
        formData.append("prevImage", props.imageUrl)

        const response = await customFetch(`/api/items/edit/${props.id}`, {
            method: "PATCH",
            headers: { "x-auth-token": userData.token },
            body: formData,
        });

        if (response.message) setErrorMessage(methods.setError, { ...response })
        else { reload(); close(); }
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
                    option={units.loading ? [{ name: "Loading Units..." }] : removeDuplicate([{ name: props.unitName, selected: true }, ...UNITS, ...units.data])}
                />

                <Select
                    sm
                    name="editCategory"
                    option={categories.loading ? [{ name: "Loading Categories..." }] : removeDuplicate([{ name: props.categoryName, selected: true }, ...CATEGORIES, ...categories.data,])}
                />

                <StyledSpaceBetween>
                    <StyledGreenButton sm as="input" value="Update Item" type="submit" />
                    <StyledRedButton sm onClick={close} type="button">Close</StyledRedButton>
                </StyledSpaceBetween>
            </Form>
        </>
    )
}
