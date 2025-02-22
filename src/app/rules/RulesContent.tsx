import RulesTableFootball from "./RulesTableFootball"
import RulesTableBasketball from "./RulesTableBasketball"
import { FaExclamationTriangle } from "react-icons/fa";
import { FaTrophy } from "react-icons/fa";
import { FaMedal } from "react-icons/fa";
import Link from "next/link";

export default function RulesContent() {
  return (
     <div className="flex justify-center bg-slate-950 pt-9">
          <div className="pl-3 pr-2  ">
              <section id="1">
                  <div>
                      <h1 className="text-4xl text-left mt-5 font-semibold  lg:text-5xl">Game <span className="text-orange-500">Rules</span></h1>
                      <h3 className="text-xl font-semibold text-left pt-3 mb-2   lg:text-3xl lg:pt-[120px] lg:pb-7">Introduction</h3>
                      <p className="text-left">
                        StarkFantasy League is an inovative <span className="text-orange-600">Web3 Fantasy Sports game </span>where players assembly virtual teams, <br />
                        compete in a monthly tournament, and can recieve reward based on their results. to enter the <br />
                        tournament, players must pay a participation fee in <span className="text-orange-600">Starknet</span> directly from their wallets, ensuring a <br />
                        decentralized and transparent competiton system. <br />
                        In the following sections, you will learn about the point assignation rules and different aspects of how <br />
                        to play properly.
                      </p>
                  </div>
              </section>
              <section id="2">
                  <div>
                      <h1 className="font-semibold text-2xl text-left pt-3 pb-2  lg:text-4xl lg:pt-5">Soccer Rules</h1>
                      <p className="text-left">
                        Create your team with a max of <span className="text-orange-600">16 players per soccer team</span>, there will be 11 in the <span className="text-orange-600">inital team</span> and 5 in the <br />
                        <span className="text-orange-600">bench</span>, the inital players will recieve the following metrics for punctuation based in the different positions:   
                      </p>
                      <RulesTableFootball />
                      <div id="3">
                        <h3 className="text-2xl text-left pb-2  lg:text-3xl">Card Punctuation Metrics</h3>
                        <p className="text-left">
                          Additionally the cards affect in a negative way the performance of your team. The yellow card has <br />
                          the following rules
                           <p className="ml-5">- For <span className="text-orange-600">players in the field</span> a yellow card penalize with <span className="text-orange-600">-2 points</span> for the player.</p>
                           <p className="ml-6">- For <span className="text-orange-600">goalkeepers</span> a yellow card penalize with <span className="text-orange-600">-5 points</span> for the player.</p>
                        </p>
                        <p className="text-left">In the case of <span className="text-orange-600">red card</span> it will set to 0 the point of the player in that match.</p>
                      </div>
                      <div id="4">
                         <h3 className="text-xl text-left pb-1 pt-3  lg:text-3xl">Additional Rules</h3>
                         <p className="text-left">
                           <p><span className="text-orange-600 font-semibold">Substitues</span>: Bench players <span className="text-orange-600">earn half the points</span>(e.g., a goal = +5 points instead of 10)</p>
                           <p><span className="text-orange-600 font-semibold">Team Captain</span>: You can select a captain for your team, these player earns <span className="text-orange-600">double point</span>(e.g., a goal <br /> = +20 points instead of 10).</p>
                         </p>
                      </div>
                  </div>
              </section>
              <section id="5">
                  <h1 className="font-semibold text-2xl text-left pt-4 pb-2  lg:text-4xl">NBA Rules</h1>
                  <p className="text-left">
                      Create your team with a max of <span className="text-orange-600">8 players per NBA team</span>, there will be 5 in the <span className="text-orange-600">inital team</span> and 3 in the <br />
                      <span className="text-orange-600">bench</span>, the inital players will recieve the following metrics for punctuation based in the different positions:   
                  </p>
                  <RulesTableBasketball />
                  <div>
                      <h3 className="text-xl text-left pb-1 pt-3  lg:text-2xl">Additional Rules</h3>
                      <p className="text-left">
                        <p><span className="text-orange-600 font-semibold">Substitues</span>: Bench players <span className="text-orange-600">earn half the points</span>(e.g., a player scored 20 points = +10 points instead of 20)</p>
                        <p><span className="text-orange-600 font-semibold">Team Captain</span>: You can select a captain for your team, these player earns <span className="text-orange-600">double point</span>(e.g., a player <br /> scored 10 points = +20 points instead of 10).</p>
                     </p>
                  </div>
              </section>
              <section>
                <div id="6">
                   <h1 className="text-left text-3xl font-semibold py-3  lg:text-4xl">Entry Fee</h1>
                   <p className=" text-left ">
                      Each official competition will have <span className="text-orange-600">different entry fee</span>, this is calculated based on the league performance <br />
                      The private leagues or <span className="text-orange-600">friends leaugue</span> will have an entry fee of <span className="text-orange-600">210 STRK</span>
                   </p>
                </div>
                <div id="7">
                  <h1 className="text-3xl font-semibold py-3 text-left lg:text-4xl">Rewards</h1>
                  <p className="text-left">
                    Each tournament offers different rewards based on the entry fee.
                    <p className="flex ml-3 pb-2">
                      <FaTrophy className="text-yellow-400 ml-3 mt-1" />
                      <p className="ml-3">Top 3 Winnes - Earn a <span className="text-orange-600">STRK</span> prize.</p>
                    </p>
                    <p className="flex ml-5 lg:ml-9">
                      <FaMedal className="text-yellow-500 "/>
                      <p className="ml-3"> 4th & 5th Place - Recive an <span className="text-orange-600">exclusive NFT</span></p>
                    </p>
                  </p>
                  <div className="flex  rounded-md ml-1 bg-slate-900 mb-5 mt-2 lg:py-3">
                    <FaExclamationTriangle className="text-yellow-500 text-2xl ml-1 lg:text-lg" />
                    <p className="ml-1 "><span className="font-semi-bold">Note:</span> Private tournaments (<span className="text-orange-600">Friends League</span>) do not qualify for rewards. Play in <span>Official</span> competitions to win!</p>
                  </div>
                </div>
              </section>
          </div>
          <span className=" hidden lg:block fixed right-20 ">
              <ul className="border-l-2 border-white pl-4 list-inside list-disc  ">
                <li className="hover:text-orange-500">
                  <Link href="#1">Introduction</Link>
                </li>
                <li className="hover:text-orange-500"><Link href="#2">Soccer Rules</Link></li>
                  <ul className="list-inside list-disc ml-3">
                    <li className="hover:text-orange-500"><Link href="#3">Card punctuation metrics</Link></li>
                    <li className="hover:text-orange-500"><Link href="#4">Additional rules</Link></li>
                  </ul>
                <li className="hover:text-orange-500"><Link href="#5">NBA Rules</Link></li>
                <li className="hover:text-orange-500"><Link href="#6">Entry Fee</Link></li>
                <li className="hover:text-orange-500"><Link href="#7">Rewards</Link></li>
              </ul>
          </span>
     </div>
  )
}