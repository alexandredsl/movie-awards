'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">movie-awards documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-7e33b58bf20acc7dc790d862f5d633cabc73c426979cccf2255be431ccd84e1bac6afc3e6e1124f7e771fbeb49864fb22bf20363fb908a46c12c02a46c878d2a"' : 'data-target="#xs-components-links-module-AppModule-7e33b58bf20acc7dc790d862f5d633cabc73c426979cccf2255be431ccd84e1bac6afc3e6e1124f7e771fbeb49864fb22bf20363fb908a46c12c02a46c878d2a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-7e33b58bf20acc7dc790d862f5d633cabc73c426979cccf2255be431ccd84e1bac6afc3e6e1124f7e771fbeb49864fb22bf20363fb908a46c12c02a46c878d2a"' :
                                            'id="xs-components-links-module-AppModule-7e33b58bf20acc7dc790d862f5d633cabc73c426979cccf2255be431ccd84e1bac6afc3e6e1124f7e771fbeb49864fb22bf20363fb908a46c12c02a46c878d2a"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/DashboardModule.html" data-type="entity-link" >DashboardModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-DashboardModule-979d679fd396159d2ef303fbd1d9b1607ac14112a1150899e4f16ecb27bdeb705f14b701c8db6d332dcfffaf90a1257cdbbc204be9fba00eb54667d92fc96151"' : 'data-target="#xs-components-links-module-DashboardModule-979d679fd396159d2ef303fbd1d9b1607ac14112a1150899e4f16ecb27bdeb705f14b701c8db6d332dcfffaf90a1257cdbbc204be9fba00eb54667d92fc96151"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DashboardModule-979d679fd396159d2ef303fbd1d9b1607ac14112a1150899e4f16ecb27bdeb705f14b701c8db6d332dcfffaf90a1257cdbbc204be9fba00eb54667d92fc96151"' :
                                            'id="xs-components-links-module-DashboardModule-979d679fd396159d2ef303fbd1d9b1607ac14112a1150899e4f16ecb27bdeb705f14b701c8db6d332dcfffaf90a1257cdbbc204be9fba00eb54667d92fc96151"' }>
                                            <li class="link">
                                                <a href="components/DashboardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DashboardComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/DashboardRoutingModule.html" data-type="entity-link" >DashboardRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/IconsProviderModule.html" data-type="entity-link" >IconsProviderModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ListModule.html" data-type="entity-link" >ListModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ListModule-da1fc0e3883a5448415a4ce4d5b196cbfaffbe3d680dfb4c2845661d12077e4ff5deef19802b02dcf972610b157a7cc28aa0b203a11f81bddb58ae0b6f0e4e3a"' : 'data-target="#xs-components-links-module-ListModule-da1fc0e3883a5448415a4ce4d5b196cbfaffbe3d680dfb4c2845661d12077e4ff5deef19802b02dcf972610b157a7cc28aa0b203a11f81bddb58ae0b6f0e4e3a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ListModule-da1fc0e3883a5448415a4ce4d5b196cbfaffbe3d680dfb4c2845661d12077e4ff5deef19802b02dcf972610b157a7cc28aa0b203a11f81bddb58ae0b6f0e4e3a"' :
                                            'id="xs-components-links-module-ListModule-da1fc0e3883a5448415a4ce4d5b196cbfaffbe3d680dfb4c2845661d12077e4ff5deef19802b02dcf972610b157a7cc28aa0b203a11f81bddb58ae0b6f0e4e3a"' }>
                                            <li class="link">
                                                <a href="components/ListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ListComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ListRoutingModule.html" data-type="entity-link" >ListRoutingModule</a>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/MoviesService.html" data-type="entity-link" >MoviesService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/AwardInterval.html" data-type="entity-link" >AwardInterval</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AwardIntervalForProducers.html" data-type="entity-link" >AwardIntervalForProducers</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MovieData.html" data-type="entity-link" >MovieData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MovieDataContent.html" data-type="entity-link" >MovieDataContent</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MovieDataPageable.html" data-type="entity-link" >MovieDataPageable</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MovieDataParams.html" data-type="entity-link" >MovieDataParams</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MovieWinnerByYear.html" data-type="entity-link" >MovieWinnerByYear</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SortProps.html" data-type="entity-link" >SortProps</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/StudiosWithWinCount.html" data-type="entity-link" >StudiosWithWinCount</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/YearsWithMultipleWinners.html" data-type="entity-link" >YearsWithMultipleWinners</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});