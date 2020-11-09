import React, { useState } from "react";
import { useHistory } from "react-router"
import { useForm } from "react-hook-form";

import Prompt from "../shared/Prompt";
import { Form, Input } from "../shared/form";

import useFetch from "root/use/useFetch";

import customFetch from "root/function/customFetch"
import setErrorMessage from "root/function/setErrorMessage"

import { UNITS, CATEGORIES } from "./defaultData"

import {
  StyledGreenButton,
  StyledGreenPlus,
  StyledSpaceBetween
} from "root/css";

export default function AddItems({ userData }) {
  const history = useHistory()
  const methods = useForm({ validateCriteriaMode: "all" });
  const { register, setError } = methods;
  
  const [reloadValue, toggleReload] = useState(false);
  const [unitValue, toggleUnit] = useState(false);
  const [categoryValue, toggleCategory] = useState(false);

  const unit = (() => {
    const { data, loading } = useFetch(
      "/api/units/all",
      { method: "GET", headers: { "x-auth-token": userData.token } },
      reloadValue
    );

    return { data, loading };
  })();

  const category = (() => {
    const { data, loading } = useFetch(
      "/api/categories/all",
      { method: "GET", headers: { "x-auth-token": userData.token } },
      reloadValue
    );

    return { data, loading };
  })();

  
  const onSubmit = async (data, event) => {
    event.preventDefault();

    const formData = new FormData();

    formData.append('addItem', data.addItem);
    formData.append('addImage', data.addImage[0]);
    formData.append('addQuantity', data.addQuantity);
    formData.append('addUnit', data.addUnit);
    formData.append('addCategory', data.addCategory);

    const response = await customFetch("/api/items/add", {
      method: "POST",
      headers: { "x-auth-token": userData.token, },
      body: formData,
    });

    if (response.message) setErrorMessage(setError, { ...response })
    else history.push("viewall");
  };

  return (
    <>
      <Form onSubmit={onSubmit} methods={methods}>
        <Input
          register={register({
            required: {
              value: true,
              message: "This is field is required",
            },
            maxLength: {
              value: 20,
              message: "Subject can't exceed max length of 20 characters",
            },
            pattern: {
              value: /^[A-Z a-z]+$/,
              message: "Characters only please",
            },
          })}
          name="addItem"
          label="Add Item"
          placeholder="Bananas..."
          type="text"
        />

        <Input
          register={register}
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
          register={register({
            required: {
              value: true,
              message: "This is field is required",
              pattern: {
                value: /^[0-9]*$/,
                message: "Characters only please",
              },
            }
          })}
        />

        <StyledSpaceBetween>
          <Input
            register={register()}
            as="select"
            name="addUnit"
            label="Units"
          >
            {!unit.loading ? [...UNITS, ...unit.data].map(({ name }, key) => (
              <option value={name} key={key}>
                {name}
              </option>
            ))
              : <option disabled>Loading Units...</option>}
          </Input>
          <StyledGreenPlus onClick={() => { toggleUnit(true); toggleReload(false); }} type="button">+</StyledGreenPlus>
        </StyledSpaceBetween>

        <StyledSpaceBetween>
          <Input
            register={register()}
            as="select"
            name="addCategory"
            label="Categories"
          >
            {!category.loading ? [...CATEGORIES, ...category.data].map(({ name }, key) => (
              <option value={name} key={key}>
                {name}
              </option>
            ))
              : <option disabled>Loading Categories...</option>}
          </Input>
          <StyledGreenPlus onClick={() => { toggleCategory(true); toggleReload(false); }} type="button">+</StyledGreenPlus>
        </StyledSpaceBetween>

        <StyledGreenButton as="input" value="Add Item" type="submit" />
      </Form>


      {unitValue ?
        <Prompt
          message="What measurement would you like to add?"
          url="/api/units/add"
          displayPrompt={toggleUnit}
          reload={toggleReload}
          register={
            register({
              required: {
                value: true,
                message: "This is field is required",
              },
              maxLength: {
                value: 30,
                message: "Name can't exceed max length of 30 characters",
              },
              pattern: {
                value: /^[A-Z a-z]+$/,
                message: "Characters only please",
              },
            })
          }
          input={{ name: "unit", label: "Add Unit", placeholder: "Yard...", type: "text" }}
        />
        : null}

      {categoryValue ?
        <Prompt
          message="What new category would you like to add?"
          url={"/api/categories/add"}
          displayPrompt={toggleCategory}
          reload={toggleReload}
          input={{ name: "category", label: "Add Category", placeholder: "Fruits...", type: "text" }}
        />
        : null}

    </>
  );
}

