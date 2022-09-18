import React from 'react';
import "./main.css"
import foto from "./fotoRomulo.jpg"
const Main = () => {
    return (
        <div>
            <div className="head">
                Feedback-2022
            </div>
            <div className='main'>

                <img src={foto} alt="foto" className='avatar' />
                <div className='info'>
                    <strong>Rômulo Palaoro</strong>
                    <span>Técnico de planejamento e programação da  manutenção</span>
                    <span>Função: Planejador.</span>
                    <span>PCP - Oficina mecânica</span>
                    <span>Supervisor: Saulo Meira</span>
                </div>
            </div>
            <div className='conversa'>
                <div className='reflexoes'>
                    <strong>
                        Principais reflexões após o retorno recebido sobre seu desempenho no último ciclo (Ex: o que você mudou no seu comportamento após a última conversa sobre seu desempenho?
                    </strong>
                    <span>
                        <ul>
                            <li>Necessidade de aumentar o network (em todas as áreas da oficina e usina).</li>
                            <li>Ser reconhecido pelo colegas e líderes como referência no PCP.</li>
                            <li>Aumentar a quantidade e qualidade das inspeções.</li>
                            <li>Criar KAIZENS que possam melhorar a qualidade do planejamento.</li>
                        </ul>
                    </span>

                </div>
                <div className='acoes'>
                    <strong>
                        O que você tem feito para melhorar seu desempenho?
                    </strong>
                    <span>
                        <ul>
                            <li>Criação de melhorias, em primeiro momento, no meu processo (Criação de robô para agilizar e padronizar o planejamento). </li>
                            <li>Criação de listas de tarefas para agilizar e padronizar o processo de planejamento.</li>
                            <li>Conversas constantes com executante/líderes dos processos de execução, para entender, aprender e usar esse aprendizado nos planejamentos das ordens.</li>
                            <li>Participação em solução de problemas (CCQ, A3, Kaizens) com empregados com muita experiência, para absorver conhecimento.</li>
                            <li>Fazer inspeções direcionadas com qualidade, buscando fazer diferença no processo e diminuir o risco.</li>
                            <li>Autodesenvolvimento (cursos de desenvolvimento de sistemas, metodologia ágil, etc).</li>
                        </ul>
                    </span>
                </div>
                <div className='interesses'>
                    <strong>
                        Motivações e interesses:
                    </strong>
                    <span>
                        <ul>
                            <li>Desenvolvimento de sistemas que possam ajudar nos processos de oficina.</li>
                        </ul>
                    </span>
                </div>
                <div className='desafios'>
                    <strong>Quais são seus desafios para o ano?</strong>
                    <span>
                        <ul>
                            <li>Ser reconhecido como um funcionário alta performance pelo meu líder, os líderes de outras áreas e os meus colegas.</li>
                            <li>Criação de listas de tarefas para equipamentos específicos.</li>
                            <li>Participar de mais Kaizens e fazer mais inspeções direcionadas.</li>
                            <li>Me aproximar mais dos técnicos de execução para minimizar desvios de planejamento.</li>
                        </ul>
                    </span>
                </div>
                <div className='aprendizado'>
                    <strong>Compartilhe o que você espera aprender no ano e/ou o que você quer se preparar para tal. </strong>
                    <span>
                        <ul>
                            <li>Elaboração de A3 (solução de problemas).</li>
                            <li>Aprender mais sobre aprovisionamento de materiais, principalmente serviço externo.</li>
                        </ul>
                    </span>
                </div>
                <div className='duvidas'>
                    <strong>Dúvidas: </strong>

                </div>
                <div className='contribuicao'>
                    <strong>
                        Qual será a sua principal contribuição para a equipe / área?
                    </strong>
                    <span>
                        <ul>
                            <li>Planejamento seguro, eficaz e padronizado.</li>
                            <li>Solicitações de inclusão de materiais em contrato (ZCON) para otimização dos futuros planejamentos.</li>
                            <li>Agilidade nos planejamentos para não impactar o processo como um todo. (quanto mais tempo no planejamento, menos tempo sobra para os outros processos.</li>
                        </ul>
                    </span>
                </div>
                <div className='ajuda'>
                    <strong>Esclareça que tipo de ajuda você precisa para enfrentar os desafios e atingir seus objetivos / metas do ano (ex: Como eu posso te apoiar?</strong>
                    <span>
                        <ul>
                            <li>Feedbacks espontâneos.</li>
                            <li>Maiores responsabilidades.</li>

                        </ul>
                    </span>
                </div>
                <div className='prioridades'>
                    <strong>Confirme suas prioridades de desenvolvimento para o ano (Passo importante para construção do PDI) </strong>
                    <span>
                        <ul>
                            <li></li>

                        </ul>
                    </span>
                </div>
                <div className='reconhecimento'>
                    <strong>Como você gosta de ser reconhecido?</strong>
                    <span>
                        <ul>
                            <li>Feedbacks.</li>
                            <li>Financeiramente.</li>

                        </ul>
                    </span>
                </div>
            </div>
        </div>

    );
}

export default Main;
