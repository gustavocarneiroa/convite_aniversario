import { selectRandomItem } from "./imagePicker";

type MessageFragments = {
  before: string;
  after: string;
};

export const mpox: MessageFragments[] = [
  {
    before: "Eu prefiro que você caia de moto a deixar",
    after: "de estar presente na",
  },
  {
    before: "Eu sei que você não vai ser corno",
    after: "o suficiente para faltar",
  },
  {
    before: "Man, parou tá fazendo papel de palhaço",
    after: "se ficar dizendo que vai faltar, então venha logo para",
  },
  {
    before: "Tu não é nem maluco para ficar dizendo que",
    after: "vai deixar de vir na",
  },
  {
    before: "Dizem as más línguas que tu se chama Hywaneiva.",
    after: "Mostre a eles o contrário vindo para",
  },
  {
    before: "Não tem desculpas para não ir:",
    after:
      "Não é no The Bar, não é no Pitombeira, nem na esquina da 8. Venha na",
  },
  {
    before: "O próprio THE CHOSEN sussurrou no meu ouvido que eu",
    after: "um aleijado, devo impedir o Trump. Veja isso na",
  },
  {
    before: "Se não vier é obrigado a ser considerado O MAIOR humorista",
    after: "da Caucaia. Venha na",
  },
  {
    before: "Se faltar vai ser pai.",
    after: "Saia do NO PELO FUTEBOL CLUBE e venha na",
  },
];
export const aggregateds: MessageFragments[] = [
  {
    before: "ATENÇÃO: tu e o doente que tu chama de namorado",
    after: "estão devidadmente convidados para comparecer na",
  },
  {
    before: "Man, tem gay demais convidado, preciso da sua presença",
    after: "hétero cis branca privilegiada na",
  },
  {
    before: "Preciso de você e seu agregado nesse último dia do mês.",
    after: "Poque sem vocês não ia ter graça, então venha na",
  },
  {
    before:
      "Bora man, simplesmente tá só tu ai moscando. Se não vier eu vou ter",
    after: "infelizmente que instaurar o comunismo sozinho na",
  },
  {
    before:
      "Man, seguinte, teu namorado recebeu um também, mas é um convite FORMAL",
    after:
      "Se não quiser sofrer as consequencias das suas ações (eu chorando), venha na",
  },
];
export const b_and_c: MessageFragments[] = [
  {
    before: "Ei man, tu é especial e gente especial tem que estar aqui comigo!",
    after: "Espero ver você na",
  },
  {
    before: "Conversar, encher o bucho, bater uns parabéns e ir embora:",
    after: "Isso é tudo o que posso oferecer para você vir na",
  },
];
export const juicy: MessageFragments[] = [
    {
        before: "⚠️ CHAMANDO TODOS OS GOSTOSOS ⚠️",
        after: "Você, lindo de belas coxas carnudas deve estar presente na",
    },
    {
        before: "Eu imploro, suplico pela sua amada presença.",
        after: "My beloved, eu preciso que você esteja comigo na",
    },
    {
        before: "Vem comer uma coisinha bem gostosa no meu aniverśario vem?",
        after: "Um negocinho de carne delicioso. Hamburguer. Da"
    },
    {
        before: "Minha festa não seria a mesma coisa sem seu rostinho lindo.",
        after: "Vamos celebrar mais um ano de amizade na"
    }
];
export const rspct: MessageFragments[] = [
    {
        before: "Se recebeu esse convite, você é uma pessoa magnífica!",
        after: "E eu quero passar meu ano de vida com pessoas assim! Venha na"
    },
    {
        before: "Preciso te dizer uma coisa: to ficando velho. E quanto mais",
        after: "velho eu fico, mais percebo como quero ter pessoas como você por perto por mais anos! Venha na"
    },
    {
        before: "Onde eu estaria com a cabeça se não convidasse você?",
        after: "Vou fazer meu aniversário nesse ano. E quero muito você na",
    }, 
    {
        before: "Será que você esperava esse convite? Do cara que não comemora aniversário?",
        after: "Claro que não! E é com essa leve surpresa que eu lhe convido para"
    },
    {
        before: "Se tem uma coisa que eu tenho certeza é que quero continuar seu amigo por mais tempo",
        after: "E queria te dar a chance de renovar a carteirinha (não obrigatório presença) na",
    },
    {
        before: "Man, hambúrguer bom, cervejinha Turatti e minha presença. É o que eu",
        after: "posso oferecer para te convencer a chegar na"
    },
    {
        before: "Nunca saio por ai comemorando aniversário de vera, mas esse ano",
        after: "quero fazer diferente. Quero reunir pessoas amáveis, então quero você na"
    },
    {
        before: "Sério, vamo de aniverśario. Vai ser massa, vai ser bom, vai ter comida",
        after: "vai ter bebida tbm (mas não de graça). Quero muito sua presença na"
    },
    {
        before: "Acredita que eu fiz um sisteminha para mandar essa mensagem aqui pra vc?",
        after: "Toda mensagem é aleatória, mas de coração. Toda vez que você entra é pra ser um resultado diferente. Esse pequeno esforço é pra mostrar o quanto quero você na"
    }
];

export const my_beloved: MessageFragments[] = [
    {
        before: "Kessinha meu amor, minha vida, minha companheira e coisa mais gostosa",
        after: "Vem na"
    },
    {
        before: "AMORRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR AAAAAAAAAAAAAAAAA TE AMO",
        after: "Vamo comemorar minha saida dos 27, vem na"
    },
    {
        before: "Oi amor. Te amo rs",
        after: "Vamo de festa na"
    },
    {
        before: "Fiz essas mensagens só para você, pq eu te amo muito muito mesmo",
        after: "Quero ver você em todas as festas que vão vir, mas especialmente nessa. Na"
    }
]

export const variations = [mpox, aggregateds, b_and_c, juicy, rspct];

export function getMessageFromVariation(messages: any[], hash: string): MessageFragments {
    const invited = messages.find(({ id }) => id == hash);
    const message = selectRandomItem<MessageFragments>(variations[invited!.variation]);
    return message.selectedItem;
}

export function gustavinhoGetter(): string {
  const gustavinhoVariations = [
    'O pai aqui',
    'El petit Gustav',
    'O Gustavinho',
    'O Gustavo em modo de ataque',
    'The Little Gustav',
    'El Donger III',
    'O comunista consumista aqui',
    'Aquele-que-deve-ser-presenteado',
    'O aniversariante',
    'O birthday boy',
    'Lil\'Gus',
    'O programador mais FOFINHO do Presidente Kennedy',
    'O Gustavinho pai do ano (🐈‍⬛)',
    'O garoto de programa aqui',
    'O jogador profissional de LOL (2011-2013) aqui',
    'O papai da Kiara',
    'O casadórr',
    'O Camarada Gustavinho ☭'
  ];

  return selectRandomItem(gustavinhoVariations).selectedItem;
}

type Quote = {
  message: string;
  who: string;
}
export function quoteGetter(): Quote {
  const quotes: Quote[] = [
    {
      message: 'Olha esse cara como ele é bom',
      who: 'Gustavo Carneiro',
    },
    {
      message: 'Para quem ganha 2k limpinho, isso ai é troco',
      who: 'Dev Gustavinho',
    },
    {
      message: 'Na minha época de ouro, eu ia era para o Pitombeira',
      who: 'Saudoso Gustavinho',
    },
    {
      message: 'Um dia desses eu comecei a assistir One Piece',
      who: 'Otaku Gustavinho',
    },
    {
      message: 'Deixa eu só descansar aqui 2 centavos e eu já faço',
      who: 'Cansado Gustavinho'
    },
    {
      message: 'Até ai tudo bem',
      who: 'Gustavo bebado'
    },
    {
      message: 'Tudo isso aqui é verdade até que tu me prove o contrário',
      who: 'Gustavinho Honesto'
    }, 
    {
      message: 'A verdade é que eu sei ler e escrever. As vezes nem sempre 100%',
      who: 'Tecnólogo em Analise de Sistemas - Gustavo Carneiro'
    },
    {
      message: 'Cara, eu choro vendo o ep.2x7 de Mob Psycho 100. O EP 6x15 de Bojack Horseman também. E quando tem aquela frase lá do manifesto "Se a classe trabalhadora tudo produz, a ela tudo pertence".',
      who: 'Gustavo Carneiro'
    },
    {
      message: 'Man, parei de trabalhar agora 21 horas e ainda vou ajudar tal pessoa aqui. Mais uma terça-feira normal',
      who: 'Gustavo Carneiro'
    },
    {
      message: 'Mano que saudade de jogar Getamped 2',
      who: 'Gustavo "UraharaSan" Carneiro'
    },
    {
      message: 'Cara, pouca coisa é tão boa na vida quanto sentar e conversar com outra pessoa. Eu sou viciado nisso, que coisa boa.',
      who: 'Gustavo Social'
    }
  ]. map( q => {
    const words = q.who.split(' ');
    const lastWord = words.pop();
    const rearranged = `— ${lastWord}, ${words.join(' ')}`;
    return {
      message: q.message,
      who: rearranged,
    }
  });
  return selectRandomItem<Quote>(quotes).selectedItem;
} 