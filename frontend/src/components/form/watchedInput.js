import React from "react"
import {useFormContext} from "react-hook-form"

import Input from "./Input"

export default function WatchedInput({...props}) {
    const {watch} = useFormContext();
    const watching = watch(props.watch)
  
    // BAD PRACTICE, should make WatchedInput seperate comp and export another file called special rules...
   if(props.name === "confirmPassword") props.rules.validate = (value) => value === watching || "Passwords do not match";

    return (
      <>
        {watching && <Input {...props} />}
      </>
      )
  }