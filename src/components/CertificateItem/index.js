
import {CertificateListItem,CertificateImage,CertificateItemText} from './styledComponents'

import './index.css'

const CertificateItem = (props) => {
    const {certificateDetails} = props
    const {certificateUrl,certificateText} = certificateDetails


    return (
        <CertificateListItem>
        <CertificateImage src = {certificateUrl} alt = {certificateText} />
        <CertificateItemText>{certificateText}</CertificateItemText>

        </CertificateListItem>

    )
}

export default CertificateItem