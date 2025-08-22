<!-- Full Article 2: Deep Injection FCCVD -->
                <div id="post-di-cnt-article" class="full-post bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200" style="display: none;">
                    <div class="p-8 md:p-10 lg:p-12">
                        <article class="prose lg:prose-xl max-w-none">
                            <header class="mb-12 border-b pb-8">
                                <h1 class="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">Cracking the Code of CNT Growth: How Transport Phenomena Shape Deep-Injection Reactors</h1>
                                <p class="mt-4 text-xl text-gray-600">Transport, not just chemistry: the jet–recirculation story behind CNT yield in DI-FCCVD.</p>
                                <div class="mt-6">
                                    <span class="text-gray-500">Published on: <time datetime="2025-08-20">August 20, 2025</time></span>
                                </div>
                            </header>
                
                            <section class="mb-10">
                                <p>When I started working on carbon nanotube (CNT) synthesis, one question kept coming up: <strong>why are we still struggling to make CNTs efficiently at large scale</strong>, despite two decades of research?</p>
                                <p>CNTs themselves are extraordinary materials: stronger than steel, lighter than aluminum, more conductive than copper. If we could make them at scale, they could transform everything from aerospace to energy storage. The challenge lies getting them out of the lab and into reliable, high-yield production. Most CNTs today are grown by floating catalyst chemical vapor deposition (FCCVD), but the process has its bottlenecks:</p>
                                <ul>
                                    <li>Only a small fraction of catalyst particles ever grow CNTs.</li>
                                    <li>Carbon conversion to CNTs is usually less than 1%.</li>
                                    <li>Reactor flow patterns are messy, with swirling recirculation zones that trap catalysts in the wrong places.</li>
                                </ul>
                                <p>In other words, we don’t fully understand how transport phenomena, heat flow, gas flow, mixing, control CNT growth inside these reactors. That’s the gap we set out to tackle.</p>
                            </section>
                
                            <section class="mb-10">
                                <h2>The Deep-Injection Twist</h2>
                                <p><strong>Deep Injection (DI)</strong> changes this story. Instead of feeding at the inlet, we inject the feed deep in the hot zone through a long, narrow cannula.
                                
                                    This long, thin injector launches a colder, high-velocity jet right into the heart of the reactor: the hot zone, setting up a very different flow pattern:</p>
                                <ul>
                                    <li>The cold injected jet moves axially down the center.</li>
                                    <li>Hot recirculating gases swirl back upstream along the reactor walls.</li>
                                    <li>Where they meet, at the interface between the jet and recirculation, is where CNTs grow best.</li>
                                </ul>
                                <blockquote class="insight-quote">
                                    👉  Growth isn’t happening everywhere. It’s happening at the narrow collision zone between the cold jet and hot recirculation. If we can control that interface, we can control productivity.
                                </blockquote>
                            </section>
                            
                            <figure class="my-12">
                                <img src="https://i.imgur.com/gK6fDk7.png" alt="Conventional FCCVD vs deep injection schematic" class="rounded-lg border w-full" loading="lazy" decoding="async" onerror="this.onerror=null;this.src='https://placehold.co/600x300/e2e8f0/475569?text=Image+Not+Found';">
                                <figcaption class="image-caption">Figure 1. Conventional FCCVD (left) traps catalyst in hot recirculation. Deep Injection (right) creates a stable central jet that forms a productive reaction interface with the hot gases.</figcaption>
                            </figure>
                
                            <section class="mb-10">
                                <h2>A Tale of Four Gases</h2>
                                <p>How do the physical properties of the gases we use shape this jet/recirculation interaction? To isolate these effects, we designed a systematic study, replacing our argon carrier gas with nitrogen, helium, and hydrogen while keeping everything else constant.</p>
                                
                                <h3 class="mt-8 text-2xl font-bold">Argon vs. Nitrogen</h3>
                                <p>As expected, Ar and N₂ behaved almost identically. Their similar transport properties meant that swapping them didn't change flow patterns or CNT growth, confirming our experiment was sensitive to gas properties, not random noise.</p>
                                
                                <h3 class="mt-8 text-2xl font-bold">Helium: A Transport Story</h3>
                                <p>Helium was the first real surprise. Because it’s so light and diffusive, the jet lost momentum and shortened as we added more. Once the Reynolds number (a measure of jet momentum) dipped below a threshold of ≈260, methane conversion fell sharply.</p>
                                <blockquote class="insight-quote">
                                    👉 <strong>Aha moment:</strong> There’s a transport tipping point. Below a critical Reynolds number, the jet can no longer sustain itself to reach the productive zone, and the reactor's efficiency collapses.
                                </blockquote>
                
                                <h3 class="mt-8 text-2xl font-bold">Hydrogen: A Chemistry Story</h3>
                                <p>Hydrogen has similar transport properties to helium, but it added a chemical twist. At low concentrations, H₂ improved selectivity. But as the H₂/CH₄ ratio climbed, it began quenching the active carbon species needed for growth. At full H₂ substitution, methane conversion collapsed from ~13% to just 0.17%—an 80-fold decrease.</p>
                                <blockquote class="insight-quote">
                                    👉 <strong>Aha moment:</strong> Flow alone isn’t enough. Even a “perfect” jet couldn’t save CNT growth when the chemistry was wrong.
                                </blockquote>
                            </section>
                            
                            <figure class="my-12">
                                <img src="https://i.imgur.com/w3n761M.png" alt="Graph of CNT productivity with different carrier gases" class="rounded-lg border w-full" loading="lazy" decoding="async" onerror="this.onerror=null;this.src='https://placehold.co/600x400/e2e8f0/475569?text=Image+Not+Found';">
                                <figcaption class="image-caption">Figure 2. CNT productivity remained stable when swapping Ar for N₂, dropped when the He concentration was high, and crashed with excess H₂.</figcaption>
                            </figure>
                
                            <section class="mb-10">
                                <h2>The Sweet Spot</h2>
                                <p>When the physics and chemistry aligned, our deep-injection reactor achieved performance metrics among the highest reported for FCCVD systems, proving that controlling transport phenomena is key to unlocking high efficiency.</p>
                                <div class="grid md:grid-cols-3 gap-6 my-8">
                                    <div class="metric-card"><div class="text-4xl font-extrabold text-indigo-600">~13%</div><div class="mt-1 text-gray-600">Methane conversion</div></div>
                                    <div class="metric-card"><div class="text-4xl font-extrabold text-indigo-600">&gt;90%</div><div class="mt-1 text-gray-600">CNT selectivity</div></div>
                                    <div class="metric-card"><div class="text-4xl font-extrabold text-indigo-600">~430 mg/h</div><div class="mt-1 text-gray-600">Productivity</div></div>
                                </div>
                            </section>
                
                            <section>
                                <h2>Why This Matters</h2>
                                <p>This study provides two critical lessons for reactor design. First, <strong>transport is central</strong>; reactor gases are not passive carriers but active agents that shape the entire flow field. Second, <strong>flow and chemistry must align</strong>. Instead of tweaking recipes blindly, we can now design FCCVD reactors where flow, heat, and chemistry are tuned together. That’s the step we need if CNTs are ever going to move from labs into real-world, large-scale applications.</p>
                            </section>
                
                            <details id="deep-dive" class="mt-12 group bg-gray-50 rounded-xl border border-gray-200">
                                <summary class="cursor-pointer select-none list-none flex items-center justify-between px-5 py-4 hover:bg-gray-100 rounded-t-xl">
                                    <span class="font-semibold text-gray-800">Deep Dive: Flow maps, dimensionless numbers, and CFD insights</span>
                                    <svg class="w-5 h-5 text-gray-600 transform transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"/></svg>
                                </summary>
                                <div class="px-5 md:px-6 lg:px-7 py-6 border-t border-gray-200">
                                    <h3>The Transport Framework: Reynolds and Rayleigh Numbers</h3>
                                    <p>To quantify the balance of forces, we used dimensionless numbers. The <strong>Reynolds number (Re)</strong> measures jet momentum versus viscous dissipation, while the <strong>Rayleigh number (Ra)</strong> measures buoyancy-driven convection versus diffusion. As we replaced argon with lighter gases like He and H₂, both Re and Ra dropped, indicating a weaker jet that was less able to penetrate the hot reactor environment.</p>
                
                                    <figure class="my-8">
                                        <img src="https://i.imgur.com/7r20h4f.png" alt="CFD simulation of deep injection reactor" class="rounded-lg border w-full" loading="lazy" decoding="async" onerror="this.onerror=null;this.src='https://placehold.co/600x300/e2e8f0/475569?text=Image+Not+Found';">
                                        <figcaption class="image-caption">Figure 3. CFD simulations reveal the cold central jet (blue) and the hot wall recirculation (red), with CNT growth occurring in the shear layer between them.</figcaption>
                                    </figure>
                                    
                                    <h3>CFD Insights: Seeing Inside the Reactor</h3>
                                    <p>Computational fluid dynamics (CFD) simulations confirmed our hypothesis. In our baseline case, the jet extended nearly half a meter, creating a large, productive overlap with the hot recirculation cell. With He or H₂, the jet shortened, the recirculation shrank, and this vital overlap region diminished significantly, starving the reaction.</p>
                
                                    <h3>Key Takeaways</h3>
                                    <ul>
                                        <li><strong>Transport is paramount:</strong> Gas properties (density, viscosity, thermal conductivity) actively shape the flow field and determine where—or if—a productive reaction zone can form.</li>
                                        <li><strong>Flow and chemistry must align:</strong> An optimal flow regime will still fail if the chemical environment suppresses the necessary precursor species, as seen in the high-hydrogen case.</li>
                                    </ul>
                
                                    <p class="mt-6">This work demonstrates that reactor performance can be understood and systematically improved by applying fundamental principles of fluid mechanics and heat transfer.</p>
                
                                    <p class="mt-8 font-semibold">Full paper: <a class="text-blue-600 hover:underline" href="https://doi.org/10.1016/j.carbon.2025.120259" target="_blank" rel="noopener">Understanding the effect of transport phenomena in deep-injection FCCVD CNT synthesis, Carbon (2025) 238:120259</a></p>
                                </div>
                            </details>
                
                        </article>
                    </div>
                </div>
            </div>
        </section>
