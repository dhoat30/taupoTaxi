import React from 'react'; 
import './OurFleet.css'; 
import '../../fonts.css'; 


class OurFleet extends React.Component{ 
    render(){ 
        return(
            <div className="our-fleet" id="fleet">
                <div className="our-fleet-overlay"> </div>
                <div class="our-fleet-main-section"> 
                    <h3 className="section-heading-top font-color-blue"> Our</h3>
                    <h2 className="section-heading font-color-white"> Fleet</h2>

                    <div className="our-fleet-grid">

                        <div> 
                            <svg height="100" viewBox="0 0 192 192" width="100" xmlns="http://www.w3.org/2000/svg"><g id="_01-steer" data-name="01-steer">
                                 <path d="m96 0a96 96 0 1 0 96 96 96.108 96.108 0 0 0 -96-96zm-67.2 118.869a281.5 281.5 0 0 1 43.271-6.081s4.65 18.353 6.829 52.112a71.264 71.264 0 0 1 -50.1-46.031zm67.2-6.869a8 8 0 1 1 8-8 8 8 0 0 1 -8 8zm17.1 52.906c2.176-33.778 6.832-52.118 6.832-52.118a281.412 281.412 0 0 1 43.271 6.084 71.266 71.266 0 0 1 -50.103 46.034zm-17.1-84.906a209.053 209.053 0 0 0 -70.916 12.69 70.988 70.988 0 0 1 141.845.531 201.7 201.7 0 0 0 -70.929-13.221z"/></g>
                            </svg>    
                            <h2 className="grid-heading font-color-white2">Driving Standards</h2> 
                            <p className="font-color-white2">As a co-operative society all our drivers own their vehicles and have a stake in the business.<br/>
                                Once a driver has passed this, we place them on our Training Programme, which covers Health and Safety, Passenger Management and Technical Training. Every driver is then reviewed annually to assess their performance.</p>
                        </div> 

                        <div> 
                            <svg version="1.1" id="Capa_1" x="0px" y="0px"
                                viewBox="0 0 384 384" >
                                <g>
                                    <g>
                                        <path d="M339.627,64.213c-4.373-12.587-16.32-21.547-30.293-21.547H256V0H128v42.667H74.667c-13.973,0-25.92,8.96-30.293,21.547
                                            L0,192v170.667C0,374.4,9.6,384,21.333,384h21.333C54.507,384,64,374.4,64,362.667v-21.333h256v21.333
                                            C320,374.4,329.6,384,341.333,384h21.333c11.84,0,21.333-9.6,21.333-21.333V192L339.627,64.213z M74.667,277.333
                                            c-17.707,0-32-14.293-32-32s14.293-32,32-32s32,14.293,32,32S92.373,277.333,74.667,277.333z M309.333,277.333
                                            c-17.707,0-32-14.293-32-32s14.293-32,32-32s32,14.293,32,32S327.04,277.333,309.333,277.333z M42.667,170.667l32-96h234.667
                                            l32,96H42.667z"/>
                                    </g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                            </svg>  
                            <h2 className="grid-heading font-color-white2">Vehicles</h2> 
                            <p className="font-color-white2">Taupo Taxis boasts over 10 vehicles, covering the entire Taupo area. All vehicles are fitted with GPS equipment and our hi-tech dispatch system sends the closest car in your area, minimizing waiting times.<br/>Our extensive fleet is made up of late model cars and includes a full range of vehicle sizes, to carry all kinds of groups.</p>
                        </div> 

                        <div> 
                            <svg id="environment" height="100" viewBox="-21 -21 682 682.66639" width="100"><path d="m630.203125 74.589844c-9.246094-29.078125-21.777344-49.898438-22.308594-50.773438-2.054687-3.386718-6.285156-5.148437-10.117187-4.269531-.992188.226563-24.65625 5.75-51.953125 19.382813-36.851563 18.398437-62.59375 42.960937-74.453125 71.019531-9.871094 23.367187-11.289063 51.933593-4.285156 83.492187-14.917969-16.660156-31.699219-31.234375-49.992188-43.503906-5.585938-11.035156-20.355469-38.203125-43.445312-66.597656-7.605469-9.347656-22.234376 2.382812-14.550782 11.824218 15.558594 19.136719 27.269532 37.957032 34.59375 50.886719l-85.402344-16.648437-81.140624-110.675782c7.878906.109376 15.785156.871094 23.652343 2.414063 24.941407 4.882813 49.578125 17.585937 73.238281 37.75 9.269532 7.902344 21.308594-6.480469 12.160157-14.273437-26.136719-22.273438-53.65625-36.367188-81.796875-41.878907-42.957032-8.40625-93.058594 2.628907-144.902344 31.925781-38.640625 21.835938-64.480469 45.820313-65.558594 46.828126-3.457031 3.230468-4.007812 9.097656-1.113281 12.871093 3.789063 7.773438 18.148437 35.816407 42.050781 66.007813 14.089844 17.800781 28.949219 33.035156 44.320313 45.554687-4.367188 3.660157-8.617188 7.488281-12.730469 11.515625-21.96875 21.488282-38.789062 46.835938-49.832031 74.546875-9.761719 24.484375-15.011719 50.824219-15.304688 77.972657-.484375 44.394531 12.378907 87.210937 37.207031 123.828124 24.253907 35.765626 58.160157 63.226563 98.050782 79.410157 11.164062 4.519531 18.222656-12.84375 7.050781-17.375-14.453125-5.863281-28.03125-13.375-40.554687-22.308594 1.601562-8.882813 5.316406-40.851563-15.917969-73.945313-2.972657-4.628906 5.914062-22.808593 11.21875-33.667968 5.476562-11.191406 11.128906-22.761719 13.769531-33.65625 2.804688-11.574219-.351562-21.289063-9.121094-28.105469-6.4375-5.003906-14.863281-7.59375-22.289062-9.878906-4.824219-1.484375-10.292969-3.164063-12.246094-4.792969-4.023438-3.371094-10.59375-15.828125-15.875-25.832031-5.859375-11.097657-11.4375-21.660157-17.132812-28.164063 12.816406-30.4375 33.402343-57.371094 59.183593-77.976562 23.550781 16.042968 50.429688 27.113281 79 29.355468-33.132812 25.671876-43.851562 58.457032-28.53125 89.949219 17.890625 36.773438 54.714844 30.898438 87.203125 25.722657 5.621094-.898438 11.4375-1.824219 17.007813-2.519532 2.089843-.261718 2.71875.308594 3.140625.679688 7.113281 6.328125 6.902344 36.550781 6.75 58.621094-.207032 30.527343-.402344 59.363281 10.96875 74.167968 5.800781 7.546875 13.96875 11.40625 23.542968 11.40625 5.738282 0 11.972657-1.382812 18.511719-4.1875 28.277344-12.109375 57.671875-48.554687 53.1875-77.390625-3.917969-25.210937-6.511719-41.867187-.398437-55.292969 5.652344-12.425781 19.316406-23.929687 46.226562-38.609374 3.222656 14.511718 4.847656 29.609374 4.679688 45.097656-.574219 52.867187-21.707032 102.347656-59.5 139.320312-42.238282 41.320313-101.601563 61.726563-160.324219 55.253906-11.964844-1.296874-14.03125 17.320313-2.050781 18.640626 64.277344 7.078124 129.265625-15.265626 175.484375-60.488282 41.378906-40.480468 64.511719-94.644531 65.140625-152.527344.835937-76.746093-38.542969-144.738281-98.488282-183.90625 12.386719-8.832031 21.613282-16.46875 26.730469-20.902343 21.855469 15.679687 41.242188 34.996093 57.371094 57.5 38.71875 54.035156 54.074219 119.90625 43.246094 185.492187-22.363281 135.386719-150.695313 227.351563-286.105469 204.980469-65.589844-10.832031-123.03125-46.550781-161.75-100.585937-38.722656-54.03125-54.078125-119.910157-43.246094-185.492188 1.945313-11.800781-16.542968-14.898438-18.496094-3.054688-11.652343 70.527344 4.867188 141.367188 46.496094 199.472657 41.636719 58.097656 103.414063 96.511719 173.941406 108.164062 14.75 2.433594 29.515626 3.636719 44.179688 3.636719 55.429688 0 109.351562-17.210938 155.300781-50.136719 58.113281-41.636719 96.53125-103.402343 108.175781-173.929687 8.535157-51.679688 1.929688-103.527344-18.585937-150.410156 9.46875-2.792969 25.582031-8.214844 43.230469-17.027344 36.84375-18.398438 62.589844-42.960938 74.445312-71.019532 11.867188-28.066406 11.535156-63.644531-.957031-102.886718zm-544.164063 257.796875c6.976563 13.226562 13.574219 25.726562 20.429688 31.460937 4.855469 4.058594 11.613281 6.136719 18.765625 8.335938 18.324219 5.632812 20.453125 8.398437 18.695313 15.644531-2.15625 8.910156-7.359376 19.550781-12.386719 29.835937-9.683594 19.8125-18.828125 38.515626-10.160157 52.03125 12.292969 19.15625 14.398438 38.015626 14.1875 49.746094-55.84375-50.355468-78.582031-129.890625-57.78125-202.179687 2.757813 4.726562 5.65625 10.21875 8.25 15.125zm453.613282-184.246094-26.644532-64.570313c12.964844-12.125 28.007813-21.25 40.820313-27.675781 10.914063-5.476562 21.296875-9.570312 29.625-12.472656zm61.085937-97.449219c3.722657 8 8.039063 18.316406 11.726563 29.976563 4.042968 12.796875 7.753906 28.65625 8.492187 45.199219l-62.441406 25.761718zm-112.097656 66.558594c2.765625-6.539062 6.339844-12.601562 10.46875-18.199219l30.332031 73.496094-27.21875 65.085937c-3.824218-8.113281-8.328125-18.769531-12.148437-30.875-7.667969-24.238281-14.136719-59.449218-1.433594-89.507812zm60.066406 114.28125c-10.503906 5.273438-20.527343 9.265625-28.691406 12.144531l28.246094-67.527343 71.898437-29.667969c-1.042968 8.054687-3.03125 16.039062-6.269531 23.695312-12.699219 30.058594-42.457031 49.960938-65.183594 61.355469zm-338.074219-5.335938c-3.3125-.648437-6.582031-1.441406-9.804687-2.34375l103.765625-76.0625 85.441406 16.652344c-31.125 24.523438-106.871094 75.964844-179.402344 61.753906zm-94.832031-58.660156c-22.191406-23.917968-38.457031-49.492187-47.796875-65.867187l108.730469 21.199219zm19.203125-125.089844 45.492188 62.050782-109.433594-21.332032c13.777344-10.878906 36.519531-27.210937 63.941406-40.71875zm72.617188 67.339844-55.152344-75.230468c16.511719-6.785157 34.234375-12.125 52.402344-14.5l76.296875 104.0625zm-5.835938 17.964844 77.761719 15.15625-99.800781 73.152344c-18.820313-8.691406-35.757813-21.1875-50.578125-35.078125zm254.40625 183.085938c-33.800781 18.007812-50.351562 32.152343-58.203125 49.40625-8.433593 18.527343-5.34375 38.414062-1.066406 65.9375 2.527344 16.230468-16.761719 46.453124-42.035156 57.277343-9.351563 4.003907-16.011719 3.53125-19.804688-1.410156-7.449219-9.695313-7.246093-39.039063-7.085937-62.613281.222656-32.617188.417968-60.785156-13.039063-72.757813-4.839843-4.304687-11.03125-6.125-17.910156-5.28125-5.894531.734375-11.875 1.6875-17.652344 2.609375-34.464843 5.492188-56.152343 7.691406-67.386719-15.40625-18.203124-37.410156 18.644532-65.121094 35.332032-75.296875 3.398437-2.070312 6.550781-4.511719 9.480468-7.230469 40.332032-4.820312 78.441407-22.125 112.402344-43.800781 40.71875 24.328125 71.976563 62.828125 86.96875 108.566407zm0 0"/></svg>
                            <h2 className="grid-heading font-color-white2">Environmental Class</h2> 
                            <p className="font-color-white2">TaupoTaxis has the largest environmental fleet of hybrid vehicles. Taupo Taxis provides an environmentally friendly service with our Eco Fleet of Toyota Prius Hybrid vehicles, diesel, and LPG. Customers are able to request an ‘Environmentally Friendly’ vehicle at the time of booking.</p>
                        </div> 

                        <div> 
                            <svg id="business-class" viewBox="0 -31 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m211 240h90v30h-90zm0 0"/><path d="m415.378906 270h-84.378906v15c0 8.289062-6.710938 15-15 15h-120c-8.289062 0-15-6.710938-15-15v-15h-84.378906c-19.394532 0-36.546875-12.363281-42.6875-30.761719l-53.933594-161.828125v327.589844c0 24.8125 20.1875 45 45 45h422c24.8125 0 45-20.1875 45-45v-327.578125l-53.9375 161.816406c-6.136719 18.398438-23.289062 30.761719-42.683594 30.761719zm0 0"/><path d="m316 0h-120c-24.8125 0-45 20.1875-45 45v15h-125.191406l56.574218 169.746094c2.050782 6.136718 7.777344 10.253906 14.238282 10.253906h84.378906v-15c0-8.289062 6.710938-15 15-15h120c8.289062 0 15 6.710938 15 15v15h84.378906c6.460938 0 12.1875-4.117188 14.238282-10.253906l56.578124-169.746094h-125.195312v-15c0-24.8125-20.1875-45-45-45zm-135 60v-15c0-8.277344 6.722656-15 15-15h120c8.277344 0 15 6.722656 15 15v15zm0 0"/></svg>  
                            <h2 className="grid-heading font-color-white2">Business Class</h2> 
                            <p className="font-color-white2">These vehicles are designed to cater for the high expectations of our corporate clients and can be ordered in advance for removal of any taxi insignia.<br/>All drivers of our Business Class vehicles undergo Advanced Customer Services training to meet a higher standard of presentation.</p>
                        </div> 

                        <div> 
                            <svg id="Layer_1" enable-background="new 0 0 512 512" height="100" viewBox="0 0 512 512" width="100" xmlns="http://www.w3.org/2000/svg"><path d="m130 344c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z"/><path d="m372 344c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z"/><path d="m512 227c0-69.622-60.223-139-143.223-139h-320.777c-26.467 0-48 21.533-48 48v184c0 26.467 21.532 48 48 48h18.518c3.951 31.525 30.903 56 63.482 56 32.39 0 59.473-24.264 63.467-55.958 34.876 0 80.201-.042 115.051-.042 3.951 31.525 30.903 56 63.482 56s59.531-24.475 63.482-56h28.518c26.467 0 48-21.533 48-48-.002-10 0-92.718 0-93zm-382 181c-26.468 0-48-21.533-48-48s21.532-48 48-48 48 21.533 48 48-21.532 48-48 48zm204-147h16c4.418 0 8 3.582 8 8s-3.582 8-8 8h-16c-4.418 0-8-3.582-8-8s3.582-8 8-8zm38 147c-26.468 0-48-21.533-48-48s21.532-48 48-48 48 21.533 48 48-21.532 48-48 48zm1.049-189c-16.067 0-28.019-14.803-24.681-30.486l5.857-27.532c2.463-11.578 12.843-19.982 24.682-19.982h79.583c21.481 21.434 34.098 49.171 36.908 78zm122.951 81h-26c-4.411 0-8-3.589-8-8s3.589-8 8-8h26z"/></svg>
                            <h2 className="grid-heading font-color-white2">Maxi Van</h2> 
                            <p className="font-color-white2">Choose from 6 to 11 seaters. We can arrange trips for school runs, group functions, wedding party transport and also offer an hourly hireage rate.</p>
                        </div> 

                        <div> 
                        <svg version="1.1" id="Capa_2"  x="0px" y="0px"
                                    viewBox="0 0 426.667 426.667"  >
                                <g>
                                    <g>
                                        <circle cx="213.333" cy="42.667" r="42.667"/>
                                    </g>
                                </g>
                                <g>
                                    <g>
                                        <g>
                                            <path d="M170.667,384c-35.307,0-64-28.693-64-64c0-27.84,17.813-51.52,42.667-60.267v-44.267C100.693,225.387,64,268.373,64,320
                                                c0,58.88,47.787,106.667,106.667,106.667c51.627,0,94.613-36.693,104.533-85.333h-44.267
                                                C222.187,366.187,198.507,384,170.667,384z"/>
                                            <path d="M362.667,234.667V192c-32.747,0.427-65.92-16-86.827-39.147l-27.627-30.507c-3.733-4.053-8.213-7.253-13.013-9.707
                                                c-0.213-0.107-0.32-0.213-0.427-0.32h-0.213c-7.36-4.267-16.107-6.4-25.387-5.44c-22.187,2.133-38.507,22.08-38.507,44.373
                                                v126.08c0,23.573,19.093,42.667,42.667,42.667H320v106.667h42.667V309.333c0-23.573-19.093-42.667-42.667-42.667h-64v-73.6
                                                C283.52,215.787,325.227,234.56,362.667,234.667z"/>
                                        </g>
                                    </g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                            </svg>
                            <h2 className="grid-heading font-color-white2">Special Needs</h2> 
                            <p className="font-color-white2">Our Total Mobility Vans include wheelchair lifts and specially trained drivers.</p>
                        </div> 

                    </div>
                 </div>
            </div>
        );
    }
}
export default OurFleet; 