import React from "react"

import Input from "./Input"

export default function Select({ ...props }) {

  return (
    <Input
      {...props}
      as="select"
    > {
        props.option.map(({ name, selected }, key) => {
          if (selected) return (
            <option selected value={name} key={key}>
              {name}
            </option>
          )

          return (
            <option value={name} key={key}>
              {name}
            </option>
          )

        })
      }
    </Input>
  );
}