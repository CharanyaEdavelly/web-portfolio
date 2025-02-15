import '../styles/CertificateItem.css'

const CertificateItem = ({data}) => {

  const {name, year, description} = data;
  return (
    <div className='certification-desc'>
      <h5 className='certificate-details'>{name}<span className='year'>{year}</span></h5>
      <p className='certificate-description'>{description}</p>
    </div>
  )
}

export default CertificateItem