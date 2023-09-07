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
export declare type TKWGOCreateFormInputValues = {
    Timestamp?: string;
    PointDetails?: string[];
};
export declare type TKWGOCreateFormValidationValues = {
    Timestamp?: ValidationFunction<string>;
    PointDetails?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TKWGOCreateFormOverridesProps = {
    TKWGOCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Timestamp?: PrimitiveOverrideProps<TextFieldProps>;
    PointDetails?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TKWGOCreateFormProps = React.PropsWithChildren<{
    overrides?: TKWGOCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: TKWGOCreateFormInputValues) => TKWGOCreateFormInputValues;
    onSuccess?: (fields: TKWGOCreateFormInputValues) => void;
    onError?: (fields: TKWGOCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TKWGOCreateFormInputValues) => TKWGOCreateFormInputValues;
    onValidate?: TKWGOCreateFormValidationValues;
} & React.CSSProperties>;
export default function TKWGOCreateForm(props: TKWGOCreateFormProps): React.ReactElement;
