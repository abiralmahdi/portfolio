import "./ExperienceCard.css"
function ExperienceCard(props){
    return (
<div className="flex relative pb-20 sm:items-center w-100 mx-auto">
  <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
    
    {/* Replace SVG with Image */}
    <div className="flex-shrink-0 w-24 h-24 inline-flex items-center justify-center  experience-logo">
      <img 
        src={props.logo} 
        alt="company logo" 
        className="w-24 h-24 object-cover" 
      />
    </div>

    <div className="flex-grow sm:pl-6 mt-6 sm:mt-0 experience-text">
      <h2 className="font-medium title-font text-info mb-1 fw-bold text-3xl">{props.companyName}</h2>
      <p className="text-white fw-bold text-2xl">{props.post}</p>
      <p className="text-white text-xl">{props.jobDesc}</p>
    </div>
    
  </div>
</div>
    )
}

export default ExperienceCard