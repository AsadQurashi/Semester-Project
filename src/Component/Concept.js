import '../Style/Concept.css';
function Concept()
{
    return (<div className='concept_body'>
        <div className="Big_Heading">
            <h1 id="Big_Heading">Jewelry is a very personal thing...<br />it should tell a story about the person who's wearing it</h1>
        </div>

        <div className="first_picture">
            <img id='first_picture' className='necklas' src="/Concept_Picture/Necklacepic1.webp" alt="Diamond Necklace" />
            <h1 className='text1'>Modular Design</h1>
            <p className='text1'>A modular collection made to mix and match.</p>
            <p className='text1'>Pick a base and choose from the menu of add-ons to start building your idyl collection.</p>
            <p className='text1'>All of our studs fit perfectly into all of our earring add-ons as well as our chain into our necklace add-ons.</p>
            <p className='text1'>Perfect to mix and match to your hearts content.</p>
        </div>

        <div className="second_picture">
            <img id='second_picture' className='necklas' src="/Concept_Picture/necklace2.jpg" alt="Diamond Necklace" />
            <h1 className='text2'>Sustainable Materials</h1>
            <p className='text2'>LAB-GROWN DIAMONDS: Let us be very clear, our diamonds are the real deal</p>
            <p className='text2'>They're neither fake nor artificial. By sight and science, there’s no difference between them, only their origin. Sustainable and kind to the planet, we believe diamonds should be accessible to all and shouldn’t cost the Earth.</p>
            <p className='text2'>TRACEABLE SOLID GOLD: We use 100% conflict-free and traceable 14K solid gold.It will not oxidize or discolor and can withstand everyday wear.</p>
        </div>

        <div className="third_picture">
            <img id='third_picture' className='necklas' src="/Concept_Picture/necklace3.jpg" alt="Diamond Necklace" />
            <h1 className='text3'>Fair Prices</h1>
            <h6 className='text3'>NO MARKUPS:</h6>
            <p className='text3'>High-calibre jewelry without the crazy markup straight to your door.</p>
            <h6 className='text3'>TRUE VALUE:</h6>
            <p className='text3'>We like the best of both worlds: Honest prices for excellent sparkle. Quality materials at the best price= win win!</p>
        </div>
    </div>);

}
export default Concept;