import React, { useState, useContext } from "react";

import Prompt from "root/components/Prompt";

import UserContext from "root/context/UserContext";
import SearchContext from "root/context/SearchContext";

import Item from "./Item"
import Edit from "./Edit"

import { StyledHeader, StyledItemGrid, StyledCenter } from "root/css";

import useFetch from "root/use/useFetch"
import useSearch from "root/use/useSearch"

import itemFilter from "root/function/itemFilter"

export default function View({ ...props }) {
    if (!props.open) return null

    const { userData } = useContext(UserContext);
    const { searchValue } = useContext(SearchContext);

    const [reload, setReload] = useState(false);
    const items = useFetch("/api/items/all", { method: "GET", headers: { "x-auth-token": userData.token } }, reload);

    const searchedItems = useSearch(!items.loading ? items.data : null, searchValue, itemFilter, !items.loading);

    return (
        <>
            {!items.loading && items.data.length === 0 ?
                <StyledCenter><StyledHeader>No Items</StyledHeader></StyledCenter>
                : null}

            <StyledItemGrid>
                {!items.loading && items.data.length !== 0 ?
                    <DisplayItems
                        reload={() => setReload(true)}
                        reloadRest={setReload}
                        data={searchValue.length > 0 ? { ...searchedItems } : { ...items }}
                    />
                    : null}
            </StyledItemGrid>
        </>
    )

}

const DisplayItems = ({ ...props }) => {
    const INITIAL_STATE = {
        open: false,
        id: null
    }

    const { userData } = useContext(UserContext);
    const [del, setDelete] = useState(INITIAL_STATE);
    const [edit, setEdit] = useState(INITIAL_STATE);

    return (
        <>
            {props.data.data.map((data) => {
                if (data === undefined || null) return
                if (edit.open && edit.id === data._id) {
                    return <Edit
                        key={data._id}
                        close={() => { setEdit({ ...edit, open: false }); props.reloadRest(false); }}
                        reload={props.reload}
                        {...edit}
                        {...data}
                    />
                }

                return (<Item
                    key={data._id}
                    del={() => setDelete({ open: true, id: data._id })}
                    edit={() => setEdit({ open: true, id: data._id })}
                    {...data}
                />)
            })}

            <Prompt
                open={del.open}
                close={() => { setDelete({ ...del, open: false }); props.reloadRest(false); }}
                reload={props.reload}
                message="Are you sure you want to delete this Item?"
                btnText={{ success: "YES", failed: "NO" }}
                fetch={{
                    url: `/api/items/delete/${del.id}`,
                    options: { method: "DELETE", headers: { "x-auth-token": userData.token } }
                }}
            />
        </>
    )
}
