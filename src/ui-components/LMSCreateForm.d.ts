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
export declare type LMSCreateFormInputValues = {
    Date?: string;
    Time?: string;
};
export declare type LMSCreateFormValidationValues = {
    Date?: ValidationFunction<string>;
    Time?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type LMSCreateFormOverridesProps = {
    LMSCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Date?: PrimitiveOverrideProps<TextFieldProps>;
    Time?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type LMSCreateFormProps = React.PropsWithChildren<{
    overrides?: LMSCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: LMSCreateFormInputValues) => LMSCreateFormInputValues;
    onSuccess?: (fields: LMSCreateFormInputValues) => void;
    onError?: (fields: LMSCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: LMSCreateFormInputValues) => LMSCreateFormInputValues;
    onValidate?: LMSCreateFormValidationValues;
} & React.CSSProperties>;
export default function LMSCreateForm(props: LMSCreateFormProps): React.ReactElement;
