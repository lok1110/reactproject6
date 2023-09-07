/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { LMS } from "../API.ts";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type LMSUpdateFormInputValues = {
    name?: string;
    Date?: string;
    Time?: string;
};
export declare type LMSUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    Date?: ValidationFunction<string>;
    Time?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type LMSUpdateFormOverridesProps = {
    LMSUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    Date?: PrimitiveOverrideProps<TextFieldProps>;
    Time?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type LMSUpdateFormProps = React.PropsWithChildren<{
    overrides?: LMSUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    lMS?: LMS;
    onSubmit?: (fields: LMSUpdateFormInputValues) => LMSUpdateFormInputValues;
    onSuccess?: (fields: LMSUpdateFormInputValues) => void;
    onError?: (fields: LMSUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: LMSUpdateFormInputValues) => LMSUpdateFormInputValues;
    onValidate?: LMSUpdateFormValidationValues;
} & React.CSSProperties>;
export default function LMSUpdateForm(props: LMSUpdateFormProps): React.ReactElement;
