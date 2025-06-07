
import CertificateItem from '../CertificateItem'

import {CertificatesContainer,CertificatesHeading,UnOrderedCertificatedContainer} from './styledComponents'

import './index.css'

const certificatesList = [
     {
        id : 1,
        certificateUrl : 'https://res.cloudinary.com/dulecuhzf/image/upload/v1748445894/Screenshot_892_zwz9ct.png',
        certificateText : "REACT JS"

    },
    
    {
        id :2,
        certificateUrl : "https://res.cloudinary.com/dulecuhzf/image/upload/v1748445926/Screenshot_895_gwgtfe.png",
        certificateText : "DYNAMIC WEB APPLICATION"
        
    },
    {
        id :3,
        certificateUrl : "https://res.cloudinary.com/dulecuhzf/image/upload/v1748445926/Screenshot_894_dhe58o.png",
        certificateText : "DEVELOPER FOUNDATIONS"
        
    },
    {
        id :4,
        certificateUrl : "https://res.cloudinary.com/dulecuhzf/image/upload/v1748445927/Screenshot_896_pndq5m.png",
        certificateText : "NODE JS"
        
    },
    {
        id :5,
        certificateUrl : "https://res.cloudinary.com/dulecuhzf/image/upload/v1748445927/Screenshot_897_fncohv.png",
        certificateText : "SQL"
        
    },
    {
        id :6,
        certificateUrl : "https://res.cloudinary.com/dulecuhzf/image/upload/v1748445928/Screenshot_898_bowvcp.png",
        certificateText : "JAVASCRIPT ESSENTIAL"
        
    },
    {
        id :7,
        certificateUrl : "https://res.cloudinary.com/dulecuhzf/image/upload/v1748445927/Screenshot_899_jf3qs6.png",
        certificateText : "FLEXBOX"
        
    },

    {
        id : 8,
        certificateUrl : "https://res.cloudinary.com/dulecuhzf/image/upload/v1748445928/Screenshot_900_h6kelm.png",
        certificateText : "PYTHON"
    },

    {
        id : 9,
        certificateUrl : "https://res.cloudinary.com/dulecuhzf/image/upload/v1748445931/Screenshot_901_steyeb.png",
        certificateText : "RESPONSIVE WEBSITE"
        
    },
    {
        id : 10,
        certificateUrl : "https://res.cloudinary.com/dulecuhzf/image/upload/v1748445932/Screenshot_902_k2ch06.png",
        certificateText : "STATIC WEBSITE"
    }

]


const Certificates = () => {
    return(


        <CertificatesContainer>
        <CertificatesHeading>Certificates</CertificatesHeading>
        <UnOrderedCertificatedContainer>
        {certificatesList.map((eachCertificateList) => (
            <CertificateItem certificateDetails = {eachCertificateList} key = {eachCertificateList.id} />
        ))}

        </UnOrderedCertificatedContainer>

        </CertificatesContainer>

    )
}



export default Certificates