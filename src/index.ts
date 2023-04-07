import Header  from './stories/Header/Header'
import Button from './stories/Button/Button'

const returnLibrary = () => {
    return {
        CCLHeader: Header,
        CCLButton: Button
        // you can add here other components that you want to export
    }
}
export default returnLibrary()