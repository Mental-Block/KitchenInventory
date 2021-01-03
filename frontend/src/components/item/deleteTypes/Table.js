import React from "react";
import { useForm } from "react-hook-form";

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

export default function Table({ ...props }) {
    const methods = useForm({ validateCriteriaMode: "all" });
    const { register } = methods;
    
    return (
        <>
            <Form onSubmit={props.onSubmit} methods={methods}>
                {props.message ? <StyledParagraph>{props.message}</StyledParagraph> : <StyledParagraph>Loading...</StyledParagraph>}
                <StyledTable>
                    <thead>
                        <tr>
                        {props.title ? <StyledTH>{props.title}</StyledTH> : <StyledTH>Loading...</StyledTH> }
                            <StyledTH>Select To Delete</StyledTH>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            !props.loading && props.data.length !== 0 ? props.data.map(({ name, title, _id }) =>
                                <tr key={_id}>
                                    <StyledTD>{name || title}</StyledTD>
                                    <StyledTD>
                                        <input ref={register} name={name || title} value={_id} type="checkbox" />
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
    )
}