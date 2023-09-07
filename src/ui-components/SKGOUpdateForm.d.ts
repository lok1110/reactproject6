/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { SKGO } from "../API.ts";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type SKGOUpdateFormInputValues = {};
export declare type SKGOUpdateFormValidationValues = {};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SKGOUpdateFormOverridesProps = {
    SKGOUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
} & EscapeHatchProps;
export declare type SKGOUpdateFormProps = React.PropsWithChildren<{
    overrides?: SKGOUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    sKGO?: SKGO;
    onSubmit?: (fields: SKGOUpdateFormInputValues) => SKGOUpdateFormInputValues;
    onSuccess?: (fields: SKGOUpdateFormInputValues) => void;
    onError?: (fields: SKGOUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SKGOUpdateFormInputValues) => SKGOUpdateFormInputValues;
    onValidate?: SKGOUpdateFormValidationValues;
} & React.CSSProperties>;
export default function SKGOUpdateForm(props: SKGOUpdateFormProps): React.ReactElement;
