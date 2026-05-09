import * as C from '/src/constants/';
import { TextboxComponent } from '/src/components/textboxComponent';
import { MultipleChoice } from '/src/components/MultipleChoice';

export const questionTypeMapper = (props = {}) => {
    return {
        [C.TEXTBOX]: <TextboxComponent {...props} />,
        [C.MULTIPLE_CHOICE]: <MultipleChoice {...props} />,
    }
}