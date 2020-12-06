import React, { useState, useContext } from "react";

import { useForm } from "react-hook-form";

import UserContext from "root/context/UserContext"

import Prompt from "root/components/Prompt";

import { Form, Input, Select } from "root/components/form";

import useFetch from "root/use/useFetch"

import customFetch from "root/function/customFetch"
import setErrorMessage from "root/function/setErrorMessage"

import { UNITS, CATEGORIES } from "./defaultData"

import {
    StyledGreenButton,
    StyledGreenPlus,
    StyledSpaceBetween,
    StyledFormMargin,
    StyledCenter,
    StyledInnerWrapper,
    StyledPadding
} from "root/css";

export default function Add({ ...props }) {
    if (!props.open) return null
    const { userData } = useContext(UserContext);

    const [unit, setUnit] = useState({ open: false, reload: false })
    const [category, setCategory] = useState({ open: false, reload: false })

    const unitFetch = useFetch("/api/units/all", { method: "GET", headers: { "x-auth-token": userData.token } }, unit.reload)
    const categoryFetch = useFetch("/api/categories/all", { method: "GET", headers: { "x-auth-token": userData.token } }, category.reload)

    const methods = useForm({ validateCriteriaMode: "all" });

    const addItem = async (data, event) => {
        event.preventDefault();

        const formData = new FormData(event.target);

        const response = await customFetch("/api/items/add", {
            method: "POST",
            headers: { "x-auth-token": userData.token, },
            body: formData,
        });

        if (response.message) setErrorMessage(methods.setError, { ...response })
        else props.close();
    };

    return (
        <>
            <StyledCenter>
                <StyledInnerWrapper>
                    <StyledPadding>
                        <StyledFormMargin>
                            <Form onSubmit={addItem} methods={methods}>
                                <Input
                                    rules={{
                                        required: {
                                            value: true,
                                            message: "This is field is required",
                                        },
                                        maxLength: {
                                            value: 15,
                                            message: "Subject can't exceed max length of 15 characters",
                                        },
                                        pattern: {
                                            value: /^[A-Z a-z]+$/,
                                            message: "Characters only please",
                                        },
                                    }}
                                    name="addTitle"
                                    label="Add Title"
                                    placeholder="Bananas..."
                                    type="text"
                                />

                                <Input
                                    label="Image File"
                                    name="addImage"
                                    accept="image/png, image/jpg, image/jpeg"
                                    type="file"
                                />

                                <Input
                                    name="addQuantity"
                                    type="number"
                                    min="0"
                                    placeholder="0"
                                    label="Quantity"
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
                                    name="addDate"
                                    type="date"
                                    label="Expiration Date"
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
                                    defaultValue="YYYY/MM/DD"
                                    min={new Date().toISOString().split("T")[0]}
                                />

                                <StyledSpaceBetween>
                                    <Select
                                        rules={{
                                            required: {
                                                value: true,
                                                message: "This is field is required",
                                            }
                                        }}
                                        name="addUnit"
                                        label="Units"
                                        option={unitFetch.loading ? [{ name: "Loading Units..." }] : [...UNITS, ...unitFetch.data]}
                                    />
                                    <StyledGreenPlus type="button" onClick={() => setUnit({ open: true, reload: false })}>&#43;</StyledGreenPlus>
                                </StyledSpaceBetween>

                                <StyledSpaceBetween>
                                    <Select
                                        name="addCategory"
                                        label="Categories"
                                        option={categoryFetch.loading ? [{ name: "Loading Categories..." }] : [...CATEGORIES, ...categoryFetch.data]} />
                                    <StyledGreenPlus type="button" onClick={() => setCategory({ open: true, reload: false })}>&#43;</StyledGreenPlus>
                                </StyledSpaceBetween>

                                <StyledGreenButton as="input" value="Add Item" type="submit" />
                            </Form>
                        </StyledFormMargin>
                    </StyledPadding>
                </StyledInnerWrapper>
            </StyledCenter>

            <Prompt
                open={unit.open}
                close={() => setUnit({ ...unit, open: false })}
                reload={() => setUnit({ ...unit, reload: true })}
                message="What new unit would you like to add?"
                btnText={{
                    success: "Add",
                    failed: "Close"
                }}
                fetch={{
                    url: "/api/units/add",
                    options: { method: "POST", headers: { "content-type": "application/json", "x-auth-token": userData.token } }
                }}
                input={{
                    name: "unit",
                    label: "Add Unit",
                    placeholder: "Yard...",
                    type: "text",
                    rules: {
                        required: {
                            value: true,
                            message: "This is field is required",
                        },
                        maxLength: {
                            value: 30,
                            message: "Name can't exceed max length of 30 characters",
                        },
                        pattern: {
                            value: /^[A-Za-z ]+$/,
                            message: "Characters only please",
                        },
                    }
                }}
            />


            <Prompt
                open={category.open}
                close={() => setCategory({ ...category, open: false })}
                reload={() => setCategory({ ...category, reload: true })}
                message="What new category would you like to add?"
                btnText={{
                    success: "Add",
                    failed: "Close"
                }}
                fetch={{
                    url: "/api/categories/add",
                    options: { method: "POST", headers: { "content-type": "application/json", "x-auth-token": userData.token } }
                }}
                input={{
                    name: "category",
                    label: "Add Category",
                    placeholder: "Fruits...",
                    type: "text",
                    rules: {
                        required: {
                            value: true,
                            message: "This is field is required",
                        },
                        maxLength: {
                            value: 30,
                            message: "Name can't exceed max length of 30 characters",
                        },
                        pattern: {
                            value: /^[A-Za-z ]+$/,
                            message: "Characters only please",
                        },
                    }
                }}
            />
        </>
    );
}