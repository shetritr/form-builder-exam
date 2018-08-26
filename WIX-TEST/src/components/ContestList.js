import React from "../../../../../../AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/react";
import FormPreview from "./FormPreview";

const FormList = ({ forms, onFormClick, onSubmissionsClick }) => {
  return (
    <tbody className="FormsList">
      {Object.keys(forms).map(formId => (
        <FormPreview
          key={formId}
          onFormClick={onFormClick}
          onSubmissionsClick={onSubmissionsClick}
          {...forms[formId]}
        />
      ))}
    </tbody>
  );
};

export default FormList;
