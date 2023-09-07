/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { TKWGO } from "../API.ts";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type TKWGOUpdateFormInputValues = {
    Timestamp?: string;
    PointDetails?: string[];
};
export declare type TKWGOUpdateFormValidationValues = {
    Timestamp?: ValidationFunction<string>;
    PointDetails?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TKWGOUpdateFormOverridesProps = {
    TKWGOUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Timestamp?: PrimitiveOverrideProps<TextFieldProps>;
    PointDetails?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TKWGOUpdateFormProps = React.PropsWithChildren<{
    overrides?: TKWGOUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    tKWGO?: TKWGO;
    onSubmit?: (fields: TKWGOUpdateFormInputValues) => TKWGOUpdateFormInputValues;
    onSuccess?: (fields: TKWGOUpdateFormInputValues) => void;
    onError?: (fields: TKWGOUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TKWGOUpdateFormInputValues) => TKWGOUpdateFormInputValues;
    onValidate?: TKWGOUpdateFormValidationValues;
} & React.CSSProperties>;
export default function TKWGOUpdateForm(props: TKWGOUpdateFormProps): React.ReactElement;
