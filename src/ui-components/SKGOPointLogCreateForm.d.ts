/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type SKGOPointLogCreateFormInputValues = {
    Timestamp?: string;
};
export declare type SKGOPointLogCreateFormValidationValues = {
    Timestamp?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SKGOPointLogCreateFormOverridesProps = {
    SKGOPointLogCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Timestamp?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SKGOPointLogCreateFormProps = React.PropsWithChildren<{
    overrides?: SKGOPointLogCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: SKGOPointLogCreateFormInputValues) => SKGOPointLogCreateFormInputValues;
    onSuccess?: (fields: SKGOPointLogCreateFormInputValues) => void;
    onError?: (fields: SKGOPointLogCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SKGOPointLogCreateFormInputValues) => SKGOPointLogCreateFormInputValues;
    onValidate?: SKGOPointLogCreateFormValidationValues;
} & React.CSSProperties>;
export default function SKGOPointLogCreateForm(props: SKGOPointLogCreateFormProps): React.ReactElement;
