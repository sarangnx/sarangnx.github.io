<template>
    <div class="curvy-bg">
        <div class="skills col-12 col-sm-10 col-lg-8 pt-5 mx-auto">
            <h1>Skills</h1>
            <section class="mt-5">
                <h4>Languages</h4>
                <div class="d-flex flex-wrap">
                    <div class="item">
                        <div class="img-container">
                            <img src="/img/logos/javascript.svg" alt="Javascript Logo" />
                        </div>
                        <span>Javascript</span>
                    </div>
                    <div class="item">
                        <div class="img-container">
                            <img src="/img/logos/python.svg" alt="Python Logo" />
                        </div>
                        <span>Python</span>
                    </div>
                    <div class="item">
                        <div class="img-container">
                            <img src="/img/logos/sql.svg" alt="SQL Logo" />
                        </div>
                        <span>SQL</span>
                    </div>
                    <div class="item">
                        <div class="img-container">
                            <img src="/img/logos/html.svg" alt="HTML Logo" />
                        </div>
                        <span>HTML</span>
                    </div>
                    <div class="item">
                        <div class="img-container">
                            <img src="/img/logos/css.svg" alt="CSS Logo" />
                        </div>
                        <span>CSS</span>
                    </div>
                    <div class="item">
                        <div class="img-container">
                            <img src="/img/logos/sass.svg" alt="SASS Logo" />
                        </div>
                        <span>SASS</span>
                    </div>
                    <div class="item">
                        <div class="img-container">
                            <img src="/img/logos/php.svg" alt="PHP Logo" />
                        </div>
                        <span>PHP</span>
                    </div>
                </div>
            </section>
            <section class="mt-5">
                <h4>Frontend Frameworks</h4>
                <div class="d-flex flex-wrap">
                    <div class="item">
                        <div class="img-container">
                            <img src="/img/logos/vue.svg" alt="Vue.js Logo" />
                        </div>
                        <span>Vue.js</span>
                    </div>
                    <div class="item">
                        <div class="img-container">
                            <img src="/img/logos/react.svg" alt="React.js Logo" />
                        </div>
                        <span>React.js</span>
                    </div>
                </div>
            </section>
            <section class="mt-5">
                <h4>Backend</h4>
                <div class="d-flex flex-wrap">
                    <div class="item">
                        <div class="img-container">
                            <img src="/img/logos/nodejs.svg" alt="Node.js Logo" />
                        </div>
                        <span>Node.js</span>
                    </div>
                    <div class="item">
                        <div class="img-container">
                            <img src="/img/logos/mysql.svg" alt="MySQL Logo" />
                        </div>
                        <span>MySQL</span>
                    </div>
                    <div class="item">
                        <div class="img-container">
                            <img src="/img/logos/mongodb.svg" alt="MongoDB Logo" />
                        </div>
                        <span>Mongo DB</span>
                    </div>
                    <div class="item">
                        <div class="img-container">
                            <img src="/img/logos/php.svg" alt="PHP Logo" />
                        </div>
                        <span>PHP</span>
                    </div>
                </div>
            </section>
            <section class="mt-5">
                <h4>Desktop Apps</h4>
                <div class="d-flex flex-wrap">
                    <div class="item">
                        <div class="img-container">
                            <img src="/img/logos/electron.svg" alt="Electron Logo" />
                        </div>
                        <span>Electron.js</span>
                    </div>
                </div>
            </section>
            <section class="mt-5">
                <h4>Cloud Services</h4>
                <div class="d-flex flex-wrap">
                    <div class="item">
                        <div class="img-container">
                            <img src="/img/logos/gcp.svg" alt="GCP Logo" />
                        </div>
                        <span>GCP</span>
                    </div>
                    <div class="item">
                        <div class="img-container">
                            <img src="/img/logos/aws.svg" alt="AWS Logo" />
                        </div>
                        <span>AWS</span>
                    </div>
                    <div class="item">
                        <div class="img-container">
                            <img src="/img/logos/heroku.svg" alt="Heroku Logo" />
                        </div>
                        <span>Heroku</span>
                    </div>
                </div>
            </section>
            <section class="mt-5">
                <h4>Tools</h4>
                <div class="d-flex flex-wrap">
                    <div class="item">
                        <div class="img-container">
                            <img src="/img/logos/git.svg" alt="Git Logo" />
                        </div>
                        <span>Git</span>
                    </div>
                    <div class="item">
                        <div class="img-container">
                            <img src="/img/logos/vscode.svg" alt="VSCode Logo" />
                        </div>
                        <span>VSCode</span>
                    </div>
                    <div class="item">
                        <div class="img-container">
                            <img src="/img/logos/ubuntu.svg" alt="Ubuntu Logo" />
                        </div>
                        <span>Ubuntu</span>
                    </div>
                    <div class="item">
                        <div class="img-container">
                            <img src="/img/logos/figma.svg" alt="Figma Logo" />
                        </div>
                        <span>Figma</span>
                    </div>
                    <div class="item">
                        <div class="img-container">
                            <img src="/img/logos/photoshop.svg" alt="Photoshop Logo" />
                        </div>
                        <span>Adobe Photoshop</span>
                    </div>
                    <div class="item">
                        <div class="img-container">
                            <img src="/img/logos/xd.svg" alt="Adobe XD Logo" />
                        </div>
                        <span>Adobe XD</span>
                    </div>
                    <div class="item">
                        <div class="img-container">
                            <img src="/img/logos/postman.svg" alt="Postman Logo" />
                        </div>
                        <span>Postman</span>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
import loader from '@/mixins/loader';

export default {
    mixins: [loader]
};
</script>

<style lang="scss">
.skills {
    h1 {
        font-weight: bold;
    }
}
.item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    font-size: 0.8rem;
    width: 100px;
    @media (max-width: 768px) {
        & {
            width: 80px;
        }
    }
    .img-container {
        width: 100%;
        display: flex;
        flex-grow: 1;
        align-items: center;
        justify-content: center;
        img {
            height: auto;
            width: 100%;
            padding: 0.5rem;
            user-select: none;
        }
    }
    span {
        text-align: center;
    }
}
</style>
