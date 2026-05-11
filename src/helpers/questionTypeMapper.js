import * as C from '/src/constants/';
import { WhatsYourNameComponent } from '/src/components/WhatsYourNameComponent';
import { MultipleChoice } from '/src/common/MultipleChoice';

export const questionTypeMapper = (props = {}) => {
    return {
        [C.WHATS_YOUR_NAME]: <WhatsYourNameComponent {...props} />,
        [C.MULTIPLE_CHOICE]: <MultipleChoice {...props} />,
    }
}