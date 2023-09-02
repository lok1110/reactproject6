/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { fetchByPath, validateField } from "./utils";
import { API } from "aws-amplify";
import { getLMS } from "../graphql/queries";
import { updateLMS } from "../graphql/mutations";
export default function LMSUpdateForm(props) {
  const {
    id: idProp,
    lMS: lMSModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    Date: "",
    Time: "",
    Point_1: "",
    Point_2: "",
    Point_3: "",
    Point_4: "",
    Point_5: "",
    Point_6: "",
    Point_7: "",
    Point_8: "",
    Point_9: "",
    Point_10: "",
    Point_11: "",
    Point_12: "",
    Point_13: "",
  };
  const [Date, setDate] = React.useState(initialValues.Date);
  const [Time, setTime] = React.useState(initialValues.Time);
  const [Point_1, setPoint_1] = React.useState(initialValues.Point_1);
  const [Point_2, setPoint_2] = React.useState(initialValues.Point_2);
  const [Point_3, setPoint_3] = React.useState(initialValues.Point_3);
  const [Point_4, setPoint_4] = React.useState(initialValues.Point_4);
  const [Point_5, setPoint_5] = React.useState(initialValues.Point_5);
  const [Point_6, setPoint_6] = React.useState(initialValues.Point_6);
  const [Point_7, setPoint_7] = React.useState(initialValues.Point_7);
  const [Point_8, setPoint_8] = React.useState(initialValues.Point_8);
  const [Point_9, setPoint_9] = React.useState(initialValues.Point_9);
  const [Point_10, setPoint_10] = React.useState(initialValues.Point_10);
  const [Point_11, setPoint_11] = React.useState(initialValues.Point_11);
  const [Point_12, setPoint_12] = React.useState(initialValues.Point_12);
  const [Point_13, setPoint_13] = React.useState(initialValues.Point_13);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = lMSRecord
      ? { ...initialValues, ...lMSRecord }
      : initialValues;
    setDate(cleanValues.Date);
    setTime(cleanValues.Time);
    setPoint_1(cleanValues.Point_1);
    setPoint_2(cleanValues.Point_2);
    setPoint_3(cleanValues.Point_3);
    setPoint_4(cleanValues.Point_4);
    setPoint_5(cleanValues.Point_5);
    setPoint_6(cleanValues.Point_6);
    setPoint_7(cleanValues.Point_7);
    setPoint_8(cleanValues.Point_8);
    setPoint_9(cleanValues.Point_9);
    setPoint_10(cleanValues.Point_10);
    setPoint_11(cleanValues.Point_11);
    setPoint_12(cleanValues.Point_12);
    setPoint_13(cleanValues.Point_13);
    setErrors({});
  };
  const [lMSRecord, setLMSRecord] = React.useState(lMSModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await API.graphql({
              query: getLMS,
              variables: { id: idProp },
            })
          )?.data?.getLMS
        : lMSModelProp;
      setLMSRecord(record);
    };
    queryData();
  }, [idProp, lMSModelProp]);
  React.useEffect(resetStateValues, [lMSRecord]);
  const validations = {
    Date: [],
    Time: [],
    Point_1: [],
    Point_2: [],
    Point_3: [],
    Point_4: [],
    Point_5: [],
    Point_6: [],
    Point_7: [],
    Point_8: [],
    Point_9: [],
    Point_10: [],
    Point_11: [],
    Point_12: [],
    Point_13: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          Date: Date ?? null,
          Time: Time ?? null,
          Point_1: Point_1 ?? null,
          Point_2: Point_2 ?? null,
          Point_3: Point_3 ?? null,
          Point_4: Point_4 ?? null,
          Point_5: Point_5 ?? null,
          Point_6: Point_6 ?? null,
          Point_7: Point_7 ?? null,
          Point_8: Point_8 ?? null,
          Point_9: Point_9 ?? null,
          Point_10: Point_10 ?? null,
          Point_11: Point_11 ?? null,
          Point_12: Point_12 ?? null,
          Point_13: Point_13 ?? null,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await API.graphql({
            query: updateLMS,
            variables: {
              input: {
                id: lMSRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "LMSUpdateForm")}
      {...rest}
    >
      <TextField
        label="Date"
        isRequired={false}
        isReadOnly={false}
        value={Date}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Date: value,
              Time,
              Point_1,
              Point_2,
              Point_3,
              Point_4,
              Point_5,
              Point_6,
              Point_7,
              Point_8,
              Point_9,
              Point_10,
              Point_11,
              Point_12,
              Point_13,
            };
            const result = onChange(modelFields);
            value = result?.Date ?? value;
          }
          if (errors.Date?.hasError) {
            runValidationTasks("Date", value);
          }
          setDate(value);
        }}
        onBlur={() => runValidationTasks("Date", Date)}
        errorMessage={errors.Date?.errorMessage}
        hasError={errors.Date?.hasError}
        {...getOverrideProps(overrides, "Date")}
      ></TextField>
      <TextField
        label="Time"
        isRequired={false}
        isReadOnly={false}
        value={Time}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Date,
              Time: value,
              Point_1,
              Point_2,
              Point_3,
              Point_4,
              Point_5,
              Point_6,
              Point_7,
              Point_8,
              Point_9,
              Point_10,
              Point_11,
              Point_12,
              Point_13,
            };
            const result = onChange(modelFields);
            value = result?.Time ?? value;
          }
          if (errors.Time?.hasError) {
            runValidationTasks("Time", value);
          }
          setTime(value);
        }}
        onBlur={() => runValidationTasks("Time", Time)}
        errorMessage={errors.Time?.errorMessage}
        hasError={errors.Time?.hasError}
        {...getOverrideProps(overrides, "Time")}
      ></TextField>
      <TextField
        label="Point 1"
        isRequired={false}
        isReadOnly={false}
        value={Point_1}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Date,
              Time,
              Point_1: value,
              Point_2,
              Point_3,
              Point_4,
              Point_5,
              Point_6,
              Point_7,
              Point_8,
              Point_9,
              Point_10,
              Point_11,
              Point_12,
              Point_13,
            };
            const result = onChange(modelFields);
            value = result?.Point_1 ?? value;
          }
          if (errors.Point_1?.hasError) {
            runValidationTasks("Point_1", value);
          }
          setPoint_1(value);
        }}
        onBlur={() => runValidationTasks("Point_1", Point_1)}
        errorMessage={errors.Point_1?.errorMessage}
        hasError={errors.Point_1?.hasError}
        {...getOverrideProps(overrides, "Point_1")}
      ></TextField>
      <TextField
        label="Point 2"
        isRequired={false}
        isReadOnly={false}
        value={Point_2}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Date,
              Time,
              Point_1,
              Point_2: value,
              Point_3,
              Point_4,
              Point_5,
              Point_6,
              Point_7,
              Point_8,
              Point_9,
              Point_10,
              Point_11,
              Point_12,
              Point_13,
            };
            const result = onChange(modelFields);
            value = result?.Point_2 ?? value;
          }
          if (errors.Point_2?.hasError) {
            runValidationTasks("Point_2", value);
          }
          setPoint_2(value);
        }}
        onBlur={() => runValidationTasks("Point_2", Point_2)}
        errorMessage={errors.Point_2?.errorMessage}
        hasError={errors.Point_2?.hasError}
        {...getOverrideProps(overrides, "Point_2")}
      ></TextField>
      <TextField
        label="Point 3"
        isRequired={false}
        isReadOnly={false}
        value={Point_3}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Date,
              Time,
              Point_1,
              Point_2,
              Point_3: value,
              Point_4,
              Point_5,
              Point_6,
              Point_7,
              Point_8,
              Point_9,
              Point_10,
              Point_11,
              Point_12,
              Point_13,
            };
            const result = onChange(modelFields);
            value = result?.Point_3 ?? value;
          }
          if (errors.Point_3?.hasError) {
            runValidationTasks("Point_3", value);
          }
          setPoint_3(value);
        }}
        onBlur={() => runValidationTasks("Point_3", Point_3)}
        errorMessage={errors.Point_3?.errorMessage}
        hasError={errors.Point_3?.hasError}
        {...getOverrideProps(overrides, "Point_3")}
      ></TextField>
      <TextField
        label="Point 4"
        isRequired={false}
        isReadOnly={false}
        value={Point_4}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Date,
              Time,
              Point_1,
              Point_2,
              Point_3,
              Point_4: value,
              Point_5,
              Point_6,
              Point_7,
              Point_8,
              Point_9,
              Point_10,
              Point_11,
              Point_12,
              Point_13,
            };
            const result = onChange(modelFields);
            value = result?.Point_4 ?? value;
          }
          if (errors.Point_4?.hasError) {
            runValidationTasks("Point_4", value);
          }
          setPoint_4(value);
        }}
        onBlur={() => runValidationTasks("Point_4", Point_4)}
        errorMessage={errors.Point_4?.errorMessage}
        hasError={errors.Point_4?.hasError}
        {...getOverrideProps(overrides, "Point_4")}
      ></TextField>
      <TextField
        label="Point 5"
        isRequired={false}
        isReadOnly={false}
        value={Point_5}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Date,
              Time,
              Point_1,
              Point_2,
              Point_3,
              Point_4,
              Point_5: value,
              Point_6,
              Point_7,
              Point_8,
              Point_9,
              Point_10,
              Point_11,
              Point_12,
              Point_13,
            };
            const result = onChange(modelFields);
            value = result?.Point_5 ?? value;
          }
          if (errors.Point_5?.hasError) {
            runValidationTasks("Point_5", value);
          }
          setPoint_5(value);
        }}
        onBlur={() => runValidationTasks("Point_5", Point_5)}
        errorMessage={errors.Point_5?.errorMessage}
        hasError={errors.Point_5?.hasError}
        {...getOverrideProps(overrides, "Point_5")}
      ></TextField>
      <TextField
        label="Point 6"
        isRequired={false}
        isReadOnly={false}
        value={Point_6}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Date,
              Time,
              Point_1,
              Point_2,
              Point_3,
              Point_4,
              Point_5,
              Point_6: value,
              Point_7,
              Point_8,
              Point_9,
              Point_10,
              Point_11,
              Point_12,
              Point_13,
            };
            const result = onChange(modelFields);
            value = result?.Point_6 ?? value;
          }
          if (errors.Point_6?.hasError) {
            runValidationTasks("Point_6", value);
          }
          setPoint_6(value);
        }}
        onBlur={() => runValidationTasks("Point_6", Point_6)}
        errorMessage={errors.Point_6?.errorMessage}
        hasError={errors.Point_6?.hasError}
        {...getOverrideProps(overrides, "Point_6")}
      ></TextField>
      <TextField
        label="Point 7"
        isRequired={false}
        isReadOnly={false}
        value={Point_7}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Date,
              Time,
              Point_1,
              Point_2,
              Point_3,
              Point_4,
              Point_5,
              Point_6,
              Point_7: value,
              Point_8,
              Point_9,
              Point_10,
              Point_11,
              Point_12,
              Point_13,
            };
            const result = onChange(modelFields);
            value = result?.Point_7 ?? value;
          }
          if (errors.Point_7?.hasError) {
            runValidationTasks("Point_7", value);
          }
          setPoint_7(value);
        }}
        onBlur={() => runValidationTasks("Point_7", Point_7)}
        errorMessage={errors.Point_7?.errorMessage}
        hasError={errors.Point_7?.hasError}
        {...getOverrideProps(overrides, "Point_7")}
      ></TextField>
      <TextField
        label="Point 8"
        isRequired={false}
        isReadOnly={false}
        value={Point_8}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Date,
              Time,
              Point_1,
              Point_2,
              Point_3,
              Point_4,
              Point_5,
              Point_6,
              Point_7,
              Point_8: value,
              Point_9,
              Point_10,
              Point_11,
              Point_12,
              Point_13,
            };
            const result = onChange(modelFields);
            value = result?.Point_8 ?? value;
          }
          if (errors.Point_8?.hasError) {
            runValidationTasks("Point_8", value);
          }
          setPoint_8(value);
        }}
        onBlur={() => runValidationTasks("Point_8", Point_8)}
        errorMessage={errors.Point_8?.errorMessage}
        hasError={errors.Point_8?.hasError}
        {...getOverrideProps(overrides, "Point_8")}
      ></TextField>
      <TextField
        label="Point 9"
        isRequired={false}
        isReadOnly={false}
        value={Point_9}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Date,
              Time,
              Point_1,
              Point_2,
              Point_3,
              Point_4,
              Point_5,
              Point_6,
              Point_7,
              Point_8,
              Point_9: value,
              Point_10,
              Point_11,
              Point_12,
              Point_13,
            };
            const result = onChange(modelFields);
            value = result?.Point_9 ?? value;
          }
          if (errors.Point_9?.hasError) {
            runValidationTasks("Point_9", value);
          }
          setPoint_9(value);
        }}
        onBlur={() => runValidationTasks("Point_9", Point_9)}
        errorMessage={errors.Point_9?.errorMessage}
        hasError={errors.Point_9?.hasError}
        {...getOverrideProps(overrides, "Point_9")}
      ></TextField>
      <TextField
        label="Point 10"
        isRequired={false}
        isReadOnly={false}
        value={Point_10}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Date,
              Time,
              Point_1,
              Point_2,
              Point_3,
              Point_4,
              Point_5,
              Point_6,
              Point_7,
              Point_8,
              Point_9,
              Point_10: value,
              Point_11,
              Point_12,
              Point_13,
            };
            const result = onChange(modelFields);
            value = result?.Point_10 ?? value;
          }
          if (errors.Point_10?.hasError) {
            runValidationTasks("Point_10", value);
          }
          setPoint_10(value);
        }}
        onBlur={() => runValidationTasks("Point_10", Point_10)}
        errorMessage={errors.Point_10?.errorMessage}
        hasError={errors.Point_10?.hasError}
        {...getOverrideProps(overrides, "Point_10")}
      ></TextField>
      <TextField
        label="Point 11"
        isRequired={false}
        isReadOnly={false}
        value={Point_11}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Date,
              Time,
              Point_1,
              Point_2,
              Point_3,
              Point_4,
              Point_5,
              Point_6,
              Point_7,
              Point_8,
              Point_9,
              Point_10,
              Point_11: value,
              Point_12,
              Point_13,
            };
            const result = onChange(modelFields);
            value = result?.Point_11 ?? value;
          }
          if (errors.Point_11?.hasError) {
            runValidationTasks("Point_11", value);
          }
          setPoint_11(value);
        }}
        onBlur={() => runValidationTasks("Point_11", Point_11)}
        errorMessage={errors.Point_11?.errorMessage}
        hasError={errors.Point_11?.hasError}
        {...getOverrideProps(overrides, "Point_11")}
      ></TextField>
      <TextField
        label="Point 12"
        isRequired={false}
        isReadOnly={false}
        value={Point_12}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Date,
              Time,
              Point_1,
              Point_2,
              Point_3,
              Point_4,
              Point_5,
              Point_6,
              Point_7,
              Point_8,
              Point_9,
              Point_10,
              Point_11,
              Point_12: value,
              Point_13,
            };
            const result = onChange(modelFields);
            value = result?.Point_12 ?? value;
          }
          if (errors.Point_12?.hasError) {
            runValidationTasks("Point_12", value);
          }
          setPoint_12(value);
        }}
        onBlur={() => runValidationTasks("Point_12", Point_12)}
        errorMessage={errors.Point_12?.errorMessage}
        hasError={errors.Point_12?.hasError}
        {...getOverrideProps(overrides, "Point_12")}
      ></TextField>
      <TextField
        label="Point 13"
        isRequired={false}
        isReadOnly={false}
        value={Point_13}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Date,
              Time,
              Point_1,
              Point_2,
              Point_3,
              Point_4,
              Point_5,
              Point_6,
              Point_7,
              Point_8,
              Point_9,
              Point_10,
              Point_11,
              Point_12,
              Point_13: value,
            };
            const result = onChange(modelFields);
            value = result?.Point_13 ?? value;
          }
          if (errors.Point_13?.hasError) {
            runValidationTasks("Point_13", value);
          }
          setPoint_13(value);
        }}
        onBlur={() => runValidationTasks("Point_13", Point_13)}
        errorMessage={errors.Point_13?.errorMessage}
        hasError={errors.Point_13?.hasError}
        {...getOverrideProps(overrides, "Point_13")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || lMSModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || lMSModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
