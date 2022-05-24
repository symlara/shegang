import 'tachyons';
import image2 from '../../assets/H.E.R._(2017)_album_cover.jpg';
import image3 from '../../assets/I_Used_To_Know_Her.jpg';
import image4 from '../../assets/Back_Of_My_Mind_By_H.E.R.png';

export default function Album() {
    return (
    <div>
      
      <section className="ph3 tc text-sm" id="streaming">
        <a className="link white-60 bg-transparent hover-white inline-flex items-center ma2 tc pa4" href="https://music.apple.com/us/artist/h-e-r/123049323" target="_blank" rel="noreferrer"> → Apple Music</a>
        <a className="link white-60 bg-transparent hover-white inline-flex items-center ma2 tc pa4" href="https://open.spotify.com/artist/3Y7RZ31TRPVadSFVy1o8os" target="_blank" rel="noreferrer"> → Spotify</a>
        <a className="link white-60 bg-transparent hover-white inline-flex items-center ma2 tc pa4" href="https://music.apple.com/us/album/back-of-my-mind-apple-music-edition/1571344275?ls=1&app=itunes&at=1l3vpUI&ct=g5nqhe%7Cher-official.com" target="_blank" rel="noreferrer"> → iTunes</a>
        <a className="link white-60 bg-transparent hover-white inline-flex items-center ma2 tc pa4" href="https://listen.tidal.com/album/187905347" target="_blank" rel="noreferrer"> → Tidal</a>
        </section>
            <section className="w-100 pv4 flex items-start discography" id="albums">
                <article className="br2 ba mv4 w-100 w-50-m w-25-l mw5 center tc" id="volume-1">
                  <img className='lazyload' alt="HER self-titled album" src={image2}
                   />
                  <h1 className="text-white font-bold">H.E.R</h1>
                  <div className="ph1">
                    <ul className="list pl0 ml0 center mw6 ba white text-semibold br2 h-100 tc">
                      <li className="ph3 pv3 bb b--light-silver">Losing </li>
                      <li className="ph3 pv3 bb b--light-silver">Avenue</li>
                      <li className="ph3 pv3 bb b--light-silver">Let Me In</li>
                      <li className="ph3 pv3 bb b--light-silver">Light On</li>
                      <li className="ph3 pv3 bb b--light-silver">Say It Again</li>
                      <li className="ph3 pv3 bb b--light-silver">Facts</li>
                      <li className="ph3 pv3 bb b--light-silver">Focus</li>
                      <li className="ph3 pv3 bb b--light-silver">U</li>
                      <li className="ph0 pv3 bb b--light-silver">Every Kind of Way</li>
                      <li className="ph1 pv3 bb b--light-silver">Best Part (Ft. Daniel Caesar)</li>
                      <li className="ph3 pv3 bb b--light-silver">Change</li>
                      <li className="ph3 pv3 bb b--light-silver">Jungle</li>
                      <li className="ph3 pv3 bb b--light-silver">Free</li>
                      <li className="ph3 pv3 bb b--light-silver">Rather Be</li>
                      <li className="ph3 pv3 bb b--light-silver">2</li>
                      <li className="ph3 pv3 bb b--light-silver">Hopes Up</li>
                      <li className="ph3 pv3 bb b--light-silver">Still Down</li>
                      <li className="ph3 pv3 bb b--light-silver">Wait for It</li>
                      <li className="ph3 pv3 bb b--light-silver">Pigment (Full Version)</li>
                      <li className="ph3 pv3 bb b--light-silver">Gone Away</li>
                      <li className="ph3 pv3 bb b--light-silver">I Won't</li>
                    </ul>
                  </div>
                </article>

                {/* <!-- I Used to Know Her album --> */}
                <article className="br2 ba mv4 w-100 w-50-m w-25-l mw5 tc" id="volume-2">
                    <img className='lazyload' alt="I Used To Know HER album center" src={image3}
                   />
                  <h1 className="text-white font-bold">I Used to Know Her</h1>
                  <div className="ph1">
                    <ul className="list pl0 ml0 center mw6 ba white br2 h-100 tc">
                      <li className="ph1 pv3 bb b--light-silver">Lost Souls (Ft. DJ Scratch)</li>
                      <li className="ph3 pv3 bb b--light-silver">Fate</li>
                      <li className="ph3 pv3 bb b--light-silver">Carried Away</li>
                      <li className="ph3 pv3 bb b--light-silver">Going (Full)</li>
                      <li className="ph3 pv3 bb b--light-silver">Be on My Way (Full)</li>
                      <li className="ph3 pv3 bb b--light-silver">Can't Help Me</li>
                      <li className="ph1 pv3 bb b--light-silver">Something Keeps Pulling Me Back</li>
                      <li className="ph3 pv3 bb b--light-silver">Feel a Way</li>
                      <li className="ph3 pv3 bb b--light-silver">21</li>
                      <li className="ph3 pv3 bb b--light-silver">Racks (Ft. Cordae)</li>
                      <li className="ph3 pv3 bb b--light-silver">I'm Not OK</li>
                      <li className="ph3 pv3 bb b--light-silver">Against Me</li>
                      <li className="ph1 pv3 bb b--light-silver">Could've Been (Ft. Bryson Tiller)</li>
                      <li className="ph3 pv3 bb b--light-silver">Good to Me</li>
                      <li className="ph3 pv3 bb b--light-silver">Take You There</li>
                      <li className="ph3 pv3 bb b--light-silver">As I Am</li>
                      <li className="ph3 pv3 bb b--light-silver">Hard Place (Single Version)</li>
                      <li className="ph3 pv3 bb b--light-silver">Wait for It</li>
                      <li className="ph3 pv3 bb b--light-silver">Uninvited (Live)</li>
                      <li className="ph1 pv3 bb b--light-silver">Lord Is Coming (Remix) (Ft. Cordae)</li>
                    </ul>
                  </div>
                </article>

                 {/* <!-- Back Of My Mind album --> */}
              <article className="br2 ba mv4 w-100 w-50-m w-25-l mw5 center tc" id="volume-3">
                <img className='lazyload' alt="Back of My Mind album" src={image4} />
                <h1 className="text-white font-bold">Back Of My Mind</h1>
                <div className="ph1">
                <ul className="list pl0 ml0 center mw6 ba white br2 h-100 tc">
                      <li className="ph3 pv3 bb b--light-silver">We Made It</li>
                      <li className="ph2 pv3 bb b--light-silver">Back of My Mind (Ft. Ty Dolla $ign)</li>
                      <li className="ph3 pv3 bb b--light-silver">Trauma (Ft. Cordae)</li>
                      <li className="ph3 pv3 bb b--light-silver">Damage</li>
                      <li className="ph3 pv3 bb b--light-silver">Find A Way (Ft. Lil Baby)</li>
                      <li className="ph3 pv3 bb b--light-silver">Bloody Waters</li>
                      <li className="ph3 pv3 bb b--light-silver">Closer To Me</li>
                      <li className="ph1 pv3 bb b--light-silver">Come Through (Ft. Chris Brown)</li>
                      <li className="ph3 pv3 bb b--light-silver">My Own</li>
                      <li className="ph3 pv3 bb b--light-silver">Lucky</li>
                      <li className="ph3 pv3 bb b--light-silver">Cheat Code</li>
                      <li className="ph3 pv3 bb b--light-silver">Process</li>
                      <li className="ph3 pv3 bb b--light-silver">Hard To Love</li>
                      <li className="ph1 pv3 bb b--light-silver">I Can Havce It All (Ft. DJ Khaled)</li>

                  </ul>
                </div>
              </article>

            </section>

            
    </div>
    );
}