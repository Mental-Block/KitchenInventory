import React, { useContext } from "react";

import UserContext from "root/context/UserContext"

import useFetch from "root/use/useFetch"
import customFetch from "root/function/customFetch"

import Table from "./Table"

export default function Categories({ ...props }) {
    if (!props.open) return null

    const { userData } = useContext(UserContext);

    const category = useFetch(
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
        <Table
            close={props.close}
            onSubmit={deleteCategory}
            message="*Any item with this category will NOT be deleted."
            title="Categories"
            {...category} />
    );
}
