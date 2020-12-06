import React, { useContext } from "react";

import UserContext from "root/context/UserContext"

import Table from "./Table"

import useFetch from "root/use/useFetch"
import customFetch from "root/function/customFetch"

export default function Categories({ ...props }) {
    if (!props.open) return null
    const { userData } = useContext(UserContext);

    const items = useFetch(
        "/api/items/all",
        { method: "GET", headers: { "x-auth-token": userData.token } }
    );

    const deleteItems = async (data, event) => {
        event.preventDefault();

        for (const key in data) {
            const id = data[key];

            if (id) {
                await customFetch(
                    `/api/items/delete/${id}`,
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
            onSubmit={deleteItems}
            {...items} />
    );
}
