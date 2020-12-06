import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";

import UserContext from "root/context/UserContext"

import { Form } from "root/components/form"

import {
    StyledTD,
    StyledTable,
    StyledTH,
    StyledRedButton,
    StyledGreenButton,
    StyledParagraph,
    StyledSpaceBetween,
} from "root/css";

import useFetch from "root/use/useFetch"
import customFetch from "root/function/customFetch"

export default function Categories({ ...props }) {
    if (!props.open) return null
    const methods = useForm({ validateCriteriaMode: "all" });
    const { register } = methods;
    const { userData } = useContext(UserContext);

    const { data, loading } = useFetch(
        "/api/categories/all",
        { method: "GET", headers: { "x-auth-token": userData.token } }
    );

    const deleteCategory = async (data, event) => {
        event.preventDefault();

        for (const key in data) {
            const id = data[key];

            if (id) {
                await customFetch(
                    `/api/categories/delete/${id}`,
                    {
                        method: "DELETE",
                        headers: { "x-auth-token": userData.token },
                    });

                props.close();
            }
        }


    }

    return (
        <>
            <Form onSubmit={deleteCategory} methods={methods}>
                <StyledParagraph>*Any Card with this category will NOT be deleted.</StyledParagraph>
                <StyledTable>
                    <thead>
                        <tr>
                            <StyledTH>Categories</StyledTH>
                            <StyledTH>Select To Delete</StyledTH>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            !loading && data.length !== 0 ? data.map(({ name, _id }) =>
                                <tr key={_id}>
                                    <StyledTD>{name}</StyledTD>
                                    <StyledTD>
                                        <input ref={register} name={name} value={_id} type="checkbox" />
                                    </StyledTD>
                                </tr>
                            ) : <tr>
                                    <StyledTD>None</StyledTD>
                                    <StyledTD>Empty</StyledTD>
                                </tr>
                        }
                    </tbody>
                </StyledTable>
                <StyledSpaceBetween>
                    <StyledRedButton as="input" value="Delete" type="submit" />
                    <StyledGreenButton type="button" onClick={props.close}>Back &#8617;</StyledGreenButton>
                </StyledSpaceBetween>
            </Form>
        </>
    );
}

