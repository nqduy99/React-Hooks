import { memo } from 'react';
import Paragraph from './Paragraph';


function Content( {theme} ) {   

    return (
        <div>
            <Paragraph />
        </div>
    )     
}

export default memo(Content);