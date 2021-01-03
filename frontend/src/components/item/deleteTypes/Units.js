import React, { useContext } from "react";

import UserContext from "root/context/UserContext"

import useFetch from "root/use/useFetch"
import customFetch from "root/function/customFetch"

import Table from "./Table";

export default function Units({ ...props }) {
    if (!props.open) return null

    const { userData } = useContext(UserContext);

    const units = useFetch(
        "/api/units/all",
        { method: "GET", headers: { "x-auth-token": userData.token } }
    );

    const deleteUnits = async (data, event) => {
        event.preventDefault();

        for (const key in data) {
            const id = data[key];

            if (id) {
                await customFetch(
                    `/api/units/delete/${id}`,
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
            onSubmit={deleteUnits}
            message="*Any item with this unit will NOT be deleted."
            title="Units"
            {...units} />
    );
}

