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
                    <a href="index.html" data-type="index-link">cbestiario-privado documentation</a>
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
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
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
                                            'data-target="#controllers-links-module-AppModule-d6734530017b111347ebb3019682428bb74731e7ad90258bc95d596c9725f1bd985496e7895980fe0bce01fc595a85ac235864039a9d84ea6fff088ef2f1ea2d"' : 'data-target="#xs-controllers-links-module-AppModule-d6734530017b111347ebb3019682428bb74731e7ad90258bc95d596c9725f1bd985496e7895980fe0bce01fc595a85ac235864039a9d84ea6fff088ef2f1ea2d"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-d6734530017b111347ebb3019682428bb74731e7ad90258bc95d596c9725f1bd985496e7895980fe0bce01fc595a85ac235864039a9d84ea6fff088ef2f1ea2d"' :
                                            'id="xs-controllers-links-module-AppModule-d6734530017b111347ebb3019682428bb74731e7ad90258bc95d596c9725f1bd985496e7895980fe0bce01fc595a85ac235864039a9d84ea6fff088ef2f1ea2d"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-d6734530017b111347ebb3019682428bb74731e7ad90258bc95d596c9725f1bd985496e7895980fe0bce01fc595a85ac235864039a9d84ea6fff088ef2f1ea2d"' : 'data-target="#xs-injectables-links-module-AppModule-d6734530017b111347ebb3019682428bb74731e7ad90258bc95d596c9725f1bd985496e7895980fe0bce01fc595a85ac235864039a9d84ea6fff088ef2f1ea2d"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-d6734530017b111347ebb3019682428bb74731e7ad90258bc95d596c9725f1bd985496e7895980fe0bce01fc595a85ac235864039a9d84ea6fff088ef2f1ea2d"' :
                                        'id="xs-injectables-links-module-AppModule-d6734530017b111347ebb3019682428bb74731e7ad90258bc95d596c9725f1bd985496e7895980fe0bce01fc595a85ac235864039a9d84ea6fff088ef2f1ea2d"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AuthModule-1e4558b8d4b2df1aa75742fa734412cc27cac263b5cca5074a22300e90d0e1b978e5dee64d984e949625f8813c3338406fda1840cdd8a0148cf530977e068419"' : 'data-target="#xs-controllers-links-module-AuthModule-1e4558b8d4b2df1aa75742fa734412cc27cac263b5cca5074a22300e90d0e1b978e5dee64d984e949625f8813c3338406fda1840cdd8a0148cf530977e068419"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-1e4558b8d4b2df1aa75742fa734412cc27cac263b5cca5074a22300e90d0e1b978e5dee64d984e949625f8813c3338406fda1840cdd8a0148cf530977e068419"' :
                                            'id="xs-controllers-links-module-AuthModule-1e4558b8d4b2df1aa75742fa734412cc27cac263b5cca5074a22300e90d0e1b978e5dee64d984e949625f8813c3338406fda1840cdd8a0148cf530977e068419"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AuthModule-1e4558b8d4b2df1aa75742fa734412cc27cac263b5cca5074a22300e90d0e1b978e5dee64d984e949625f8813c3338406fda1840cdd8a0148cf530977e068419"' : 'data-target="#xs-injectables-links-module-AuthModule-1e4558b8d4b2df1aa75742fa734412cc27cac263b5cca5074a22300e90d0e1b978e5dee64d984e949625f8813c3338406fda1840cdd8a0148cf530977e068419"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-1e4558b8d4b2df1aa75742fa734412cc27cac263b5cca5074a22300e90d0e1b978e5dee64d984e949625f8813c3338406fda1840cdd8a0148cf530977e068419"' :
                                        'id="xs-injectables-links-module-AuthModule-1e4558b8d4b2df1aa75742fa734412cc27cac263b5cca5074a22300e90d0e1b978e5dee64d984e949625f8813c3338406fda1840cdd8a0148cf530977e068419"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/JwtStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JwtStrategy</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PrismaModule.html" data-type="entity-link" >PrismaModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-PrismaModule-8a45c52f5bc506f9fcef1f4c7b34e596b06323bae0951c4fe354cc2b76489f6abcf1207439120a4bd3a6cf40174b139cda70f7a558a3f53d9bcdd3a9e74b81bf"' : 'data-target="#xs-injectables-links-module-PrismaModule-8a45c52f5bc506f9fcef1f4c7b34e596b06323bae0951c4fe354cc2b76489f6abcf1207439120a4bd3a6cf40174b139cda70f7a558a3f53d9bcdd3a9e74b81bf"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PrismaModule-8a45c52f5bc506f9fcef1f4c7b34e596b06323bae0951c4fe354cc2b76489f6abcf1207439120a4bd3a6cf40174b139cda70f7a558a3f53d9bcdd3a9e74b81bf"' :
                                        'id="xs-injectables-links-module-PrismaModule-8a45c52f5bc506f9fcef1f4c7b34e596b06323bae0951c4fe354cc2b76489f6abcf1207439120a4bd3a6cf40174b139cda70f7a558a3f53d9bcdd3a9e74b81bf"' }>
                                        <li class="link">
                                            <a href="injectables/PrismaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProfileModule.html" data-type="entity-link" >ProfileModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-ProfileModule-8e5335d9d3ce7864892ec80ae101eb48019ca3b4302e25ccdf9e820468ae927cd8e520df6da3465e2c7687fee4eada68f3e9459b29012f5860d94c802565590c"' : 'data-target="#xs-controllers-links-module-ProfileModule-8e5335d9d3ce7864892ec80ae101eb48019ca3b4302e25ccdf9e820468ae927cd8e520df6da3465e2c7687fee4eada68f3e9459b29012f5860d94c802565590c"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ProfileModule-8e5335d9d3ce7864892ec80ae101eb48019ca3b4302e25ccdf9e820468ae927cd8e520df6da3465e2c7687fee4eada68f3e9459b29012f5860d94c802565590c"' :
                                            'id="xs-controllers-links-module-ProfileModule-8e5335d9d3ce7864892ec80ae101eb48019ca3b4302e25ccdf9e820468ae927cd8e520df6da3465e2c7687fee4eada68f3e9459b29012f5860d94c802565590c"' }>
                                            <li class="link">
                                                <a href="controllers/ProfileController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProfileController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ProfileModule-8e5335d9d3ce7864892ec80ae101eb48019ca3b4302e25ccdf9e820468ae927cd8e520df6da3465e2c7687fee4eada68f3e9459b29012f5860d94c802565590c"' : 'data-target="#xs-injectables-links-module-ProfileModule-8e5335d9d3ce7864892ec80ae101eb48019ca3b4302e25ccdf9e820468ae927cd8e520df6da3465e2c7687fee4eada68f3e9459b29012f5860d94c802565590c"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ProfileModule-8e5335d9d3ce7864892ec80ae101eb48019ca3b4302e25ccdf9e820468ae927cd8e520df6da3465e2c7687fee4eada68f3e9459b29012f5860d94c802565590c"' :
                                        'id="xs-injectables-links-module-ProfileModule-8e5335d9d3ce7864892ec80ae101eb48019ca3b4302e25ccdf9e820468ae927cd8e520df6da3465e2c7687fee4eada68f3e9459b29012f5860d94c802565590c"' }>
                                        <li class="link">
                                            <a href="injectables/ProfileService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProfileService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link" >UserModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-UserModule-5d79bec2887311c1750ddcce3e41d418192ef5b197ab02b9dd91e633bf57791edd694cbd9d4b01cc1a76f2b694240e69e09dc38a55eeac1a47f41aa30a61f752"' : 'data-target="#xs-controllers-links-module-UserModule-5d79bec2887311c1750ddcce3e41d418192ef5b197ab02b9dd91e633bf57791edd694cbd9d4b01cc1a76f2b694240e69e09dc38a55eeac1a47f41aa30a61f752"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UserModule-5d79bec2887311c1750ddcce3e41d418192ef5b197ab02b9dd91e633bf57791edd694cbd9d4b01cc1a76f2b694240e69e09dc38a55eeac1a47f41aa30a61f752"' :
                                            'id="xs-controllers-links-module-UserModule-5d79bec2887311c1750ddcce3e41d418192ef5b197ab02b9dd91e633bf57791edd694cbd9d4b01cc1a76f2b694240e69e09dc38a55eeac1a47f41aa30a61f752"' }>
                                            <li class="link">
                                                <a href="controllers/UserController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-UserModule-5d79bec2887311c1750ddcce3e41d418192ef5b197ab02b9dd91e633bf57791edd694cbd9d4b01cc1a76f2b694240e69e09dc38a55eeac1a47f41aa30a61f752"' : 'data-target="#xs-injectables-links-module-UserModule-5d79bec2887311c1750ddcce3e41d418192ef5b197ab02b9dd91e633bf57791edd694cbd9d4b01cc1a76f2b694240e69e09dc38a55eeac1a47f41aa30a61f752"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UserModule-5d79bec2887311c1750ddcce3e41d418192ef5b197ab02b9dd91e633bf57791edd694cbd9d4b01cc1a76f2b694240e69e09dc38a55eeac1a47f41aa30a61f752"' :
                                        'id="xs-injectables-links-module-UserModule-5d79bec2887311c1750ddcce3e41d418192ef5b197ab02b9dd91e633bf57791edd694cbd9d4b01cc1a76f2b694240e69e09dc38a55eeac1a47f41aa30a61f752"' }>
                                        <li class="link">
                                            <a href="injectables/UserService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#controllers-links"' :
                                'data-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AuthController.html" data-type="entity-link" >AuthController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/ProfileController.html" data-type="entity-link" >ProfileController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UserController.html" data-type="entity-link" >UserController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CreateProfileDto.html" data-type="entity-link" >CreateProfileDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginDto.html" data-type="entity-link" >LoginDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginResponseDto.html" data-type="entity-link" >LoginResponseDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Profile.html" data-type="entity-link" >Profile</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateProfileDto.html" data-type="entity-link" >UpdateProfileDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUserDto.html" data-type="entity-link" >UpdateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link" >User</a>
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
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtStrategy.html" data-type="entity-link" >JwtStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PrismaService.html" data-type="entity-link" >PrismaService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProfileService.html" data-type="entity-link" >ProfileService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link" >UserService</a>
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
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
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