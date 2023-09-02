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
    Date?: string;
    Time?: string;
    Point_1?: string;
    Point_2?: string;
    Point_3?: string;
    Point_4?: string;
    Point_5?: string;
    Point_6?: string;
    Point_7?: string;
    Point_8?: string;
    Point_9?: string;
    Point_10?: string;
    Point_11?: string;
    Point_12?: string;
    Point_13?: string;
};
export declare type LMSUpdateFormValidationValues = {
    Date?: ValidationFunction<string>;
    Time?: ValidationFunction<string>;
    Point_1?: ValidationFunction<string>;
    Point_2?: ValidationFunction<string>;
    Point_3?: ValidationFunction<string>;
    Point_4?: ValidationFunction<string>;
    Point_5?: ValidationFunction<string>;
    Point_6?: ValidationFunction<string>;
    Point_7?: ValidationFunction<string>;
    Point_8?: ValidationFunction<string>;
    Point_9?: ValidationFunction<string>;
    Point_10?: ValidationFunction<string>;
    Point_11?: ValidationFunction<string>;
    Point_12?: ValidationFunction<string>;
    Point_13?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type LMSUpdateFormOverridesProps = {
    LMSUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Date?: PrimitiveOverrideProps<TextFieldProps>;
    Time?: PrimitiveOverrideProps<TextFieldProps>;
    Point_1?: PrimitiveOverrideProps<TextFieldProps>;
    Point_2?: PrimitiveOverrideProps<TextFieldProps>;
    Point_3?: PrimitiveOverrideProps<TextFieldProps>;
    Point_4?: PrimitiveOverrideProps<TextFieldProps>;
    Point_5?: PrimitiveOverrideProps<TextFieldProps>;
    Point_6?: PrimitiveOverrideProps<TextFieldProps>;
    Point_7?: PrimitiveOverrideProps<TextFieldProps>;
    Point_8?: PrimitiveOverrideProps<TextFieldProps>;
    Point_9?: PrimitiveOverrideProps<TextFieldProps>;
    Point_10?: PrimitiveOverrideProps<TextFieldProps>;
    Point_11?: PrimitiveOverrideProps<TextFieldProps>;
    Point_12?: PrimitiveOverrideProps<TextFieldProps>;
    Point_13?: PrimitiveOverrideProps<TextFieldProps>;
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
