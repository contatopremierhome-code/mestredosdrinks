import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'Como recebo o material?',
    answer: "Imediatamente! Assim que seu pagamento for processado, você receberá um link seguro para baixar todos os livros de receitas e guias em formato PDF.",
  },
  {
    question: 'Preciso de ferramentas profissionais?',
    answer: "De jeito nenhum. Nosso guia é feito para bartenders caseiros. Mostramos como usar itens de cozinha comuns para criar coquetéis incríveis. O bônus 'Manual de Como Criar seu Mini Bar de Drinks em Casa' também mostra as únicas ferramentas acessíveis que você talvez queira considerar.",
  },
  {
    question: 'Por que o preço é tão baixo?',
    answer: 'Acreditamos em democratizar o conhecimento. Nosso objetivo é levar a arte da coquetelaria para o maior número de pessoas possível, por isso oferecemos um preço acessível a todos.',
  },
  {
    question: 'E se eu não gostar? Qual a garantia?',
    answer: 'Sim! Oferecemos garantia incondicional de 7 dias. Se por qualquer motivo você não ficar satisfeito, devolvemos 100% do seu dinheiro, sem perguntas.',
  },
  {
    question: 'Posso ver no meu celular?',
    answer: 'Sim, nossos PDFs são projetados para serem lindamente legíveis em qualquer dispositivo: celular, tablet ou computador. Leve suas receitas com você onde quer que vá.',
  },
];

const Faq = () => {
  return (
    <section id="faq" className="py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl font-extrabold tracking-tight sm:text-4xl">
            Perguntas Frequentes
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Tem perguntas? Nós temos as respostas.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left text-lg hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Faq;
