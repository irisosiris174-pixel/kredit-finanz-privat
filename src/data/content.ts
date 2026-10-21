export interface Testimonial {
  id: string;
  name: string;
  role: {
    de: string;
    en: string;
    es: string;
    fr: string;
  };
  location: string;
  rating: number;
  amount: string;
  date: string;
  content: {
    de: string;
    en: string;
    es: string;
    fr: string;
  };
}

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: '1',
    name: 'Markus Weber',
    role: {
      de: 'Ingenieur',
      en: 'Engineer',
      es: 'Ingeniero',
      fr: 'Ingénieur'
    },
    location: 'München, Deutschland',
    rating: 5,
    amount: '25.000 €',
    date: '12/09/2026',
    content: {
      de: 'Ich habe bei Kredit Finanz Privat einen Autokredit beantragt. Der Zinssatz von 3% ist im aktuellen Marktumfeld unschlagbar. Die Auszahlung erfolgte innerhalb von 48 Stunden. Ausgezeichneter Service!',
      en: 'I applied for a car loan with Kredit Finanz Privat. The 3% interest rate is unbeatable in the current market. The payout was made within 48 hours. Excellent service!',
      es: 'Solicité un préstamo para coche en Kredit Finanz Privat. El tipo de interés del 3% es inmejorable en el mercado actual. El desembolso se realizó en 48 horas. ¡Un servicio excelente!',
      fr: 'J\'ai souscrit un crédit auto chez Kredit Finanz Privat. Le taux de 3% est imbattable actuellement. Les fonds ont été débloqués en 48 heures. Service impeccable !'
    }
  },
  {
    id: '2',
    name: 'Sophie Laurent',
    role: {
      de: 'Architektin',
      en: 'Architect',
      es: 'Arquitecta',
      fr: 'Architecte'
    },
    location: 'Lyon, France',
    rating: 5,
    amount: '18.000 €',
    date: '28/08/2026',
    content: {
      de: 'Ein sehr transparenter Prozess für unseren Renovierungskredit. Keine versteckten Gebühren und das Formular war in 3 Minuten ausgefüllt.',
      en: 'A very transparent process for our home renovation loan. No hidden fees and the application took only 3 minutes.',
      es: 'Un proceso muy transparente para nuestro préstamo de reformas. Sin comisiones ocultas y la solicitud se completó en solo 3 minutos.',
      fr: 'Procédure d\'une transparence exemplaire pour notre prêt travaux. Aucun frais caché et demande complétée en 3 minutes.'
    }
  },
  {
    id: '3',
    name: 'Carlos Mendoza',
    role: {
      de: 'Unternehmer',
      en: 'Entrepreneur',
      es: 'Empresario',
      fr: 'Entrepreneur'
    },
    location: 'Madrid, España',
    rating: 5,
    amount: '35.000 €',
    date: '15/08/2026',
    content: {
      de: 'Die Kreditumschuldung hat meine monatlichen Ausgaben deutlich gesenkt. Vielen Dank an das Kredit Finanz Privat-Team für die schnelle Abwicklung.',
      en: 'Debt consolidation significantly reduced my monthly expenses. Many thanks to the Kredit Finanz Privat team for swift execution.',
      es: 'La consolidación de préstamos redujo significativamente mis gastos mensuales. Muchas gracias al equipo de Kredit Finanz Privat por su rapidez.',
      fr: 'Le regroupement de crédits a considérablement réduit mes charges mensuelles. Un grand merci à l\'équipe Kredit Finanz Privat pour leur rapidité.'
    }
  },
  {
    id: '4',
    name: 'Elena Rostova',
    role: {
      de: 'Lehrerin',
      en: 'Teacher',
      es: 'Profesora',
      fr: 'Enseignante'
    },
    location: 'Berlin, Deutschland',
    rating: 5,
    amount: '12.000 €',
    date: '02/08/2026',
    content: {
      de: 'Ein Privater Kredit ohne Bürokratie. Sehr freundlicher Kundenservice per E-Mail. Ich kann Kredit Finanz Privat jedem empfehlen.',
      en: 'A personal loan without red tape. Very friendly customer service via email. I recommend Kredit Finanz Privat to everyone.',
      es: 'Un préstamo personal sin burocracia pesada. Atención al cliente muy amable por correo electrónico. Recomiendo Kredit Finanz Privat a todos.',
      fr: 'Un prêt personnel sans lourdeur administrative. Service client très réactif et bienveillant par e-mail. Je recommande vivement.'
    }
  },
  {
    id: '5',
    name: 'David Miller',
    role: {
      de: 'IT-Consultant',
      en: 'IT Consultant',
      es: 'Consultor IT',
      fr: 'Consultant IT'
    },
    location: 'Frankfurt, Deutschland',
    rating: 5,
    amount: '40.000 €',
    date: '19/07/2026',
    content: {
      de: 'Seriös und verlässlich. Der festgeschriebene Zinssatz von 3% gibt mir volle Sicherheit für mein Immobilienprojekt.',
      en: 'Reputable and reliable. The fixed 3% interest rate provides complete security for my real estate project.',
      es: 'Serio y fiable. El tipo de interés fijo del 3% me da total seguridad para mi proyecto inmobiliario.',
      fr: 'Sérieux et professionnel. Le taux fixe de 3% garantit une sécurité totale pour mon projet immobilier.'
    }
  },
  {
    id: '6',
    name: 'Lucía Fernández',
    role: {
      de: 'Medizinerin',
      en: 'Doctor',
      es: 'Médica',
      fr: 'Médecin'
    },
    location: 'Valencia, España',
    rating: 5,
    amount: '15.000 €',
    date: '05/07/2026',
    content: {
      de: 'Schneller Service und sehr klare Bedingungen. Das Geld war pünktlich auf meinem Konto.',
      en: 'Fast service and very clear conditions. The money reached my account right on time.',
      es: 'Servicio rápido y condiciones muy claras. El dinero llegó a mi cuenta bancaria exactamente a tiempo.',
      fr: 'Service rapide et conditions très claires. L\'argent a été crédité sur mon compte sans aucun retard.'
    }
  },
  {
    id: '7',
    name: 'Alexandre Moreau',
    role: {
      de: 'Grafikdesigner',
      en: 'Graphic Designer',
      es: 'Diseñador Gráfico',
      fr: 'Designer Graphique'
    },
    location: 'Bordeaux, France',
    rating: 5,
    amount: '8.000 €',
    date: '22/06/2026',
    content: {
      de: 'Super einfache Abwicklung auf dem Smartphone. Nach 24 Stunden hatte ich die Bestätigung.',
      en: 'Super easy process on smartphone. I had the confirmation within 24 hours.',
      es: 'Tramitación súper sencilla desde el móvil. En 24 horas ya tenía la confirmación.',
      fr: 'Procédure ultra simple sur smartphone. J\'ai obtenu le traitement préliminaire sous 24h.'
    }
  },
  {
    id: '8',
    name: 'Anna Schmidt',
    role: {
      de: 'Pharmareferentin',
      en: 'Pharmaceutical Rep',
      es: 'Delegada Médica',
      fr: 'Déléguée Médicale'
    },
    location: 'Hamburg, Deutschland',
    rating: 5,
    amount: '20.000 €',
    date: '10/06/2026',
    content: {
      de: 'Kredit Finanz Privat hat mir geholfen, meine Weiterbildung zu finanzieren. Absolut professionell!',
      en: 'Kredit Finanz Privat helped me finance my professional training. Absolutely professional!',
      es: 'Kredit Finanz Privat me ayudó a financiar mi máster formativo. ¡Absolutamente profesionales!',
      fr: 'Kredit Finanz Privat m\'a permis de financer ma formation professionnelle. Un accompagnement irréprochable.'
    }
  },
  {
    id: '9',
    name: 'Javier Navarro',
    role: {
      de: 'Logistikleiter',
      en: 'Logistics Manager',
      es: 'Director de Logística',
      fr: 'Responsable Logistique'
    },
    location: 'Sevilla, España',
    rating: 5,
    amount: '30.000 €',
    date: '01/06/2026',
    content: {
      de: 'Alles klappte wie versprochen. Kein unnötiger Papierkram und ein top Zinssatz.',
      en: 'Everything worked as promised. No unnecessary paperwork and a top interest rate.',
      es: 'Todo funcionó tal como se acordó. Sin papeleo innecesario y con un tipo de interés inmejorable.',
      fr: 'Tout s\'est déroulé comme promis. Aucun paperasse inutile et un taux d\'intérêt imbattable.'
    }
  },
  {
    id: '10',
    name: 'Claire Dubois',
    role: {
      de: 'Projektmanagerin',
      en: 'Project Manager',
      es: 'Jefa de Proyectos',
      fr: 'Chef de Projet'
    },
    location: 'Strasbourg, France',
    rating: 5,
    amount: '14.000 €',
    date: '18/05/2026',
    content: {
      de: 'Sehr kompetentes Team. Ich konnte meine Fragen direkt und unkompliziert per E-Mail klären. Vielen Dank!',
      en: 'Very competent team. I was able to clarify my questions quickly and directly via email. Thank you!',
      es: 'Equipo sumamente competente. Pude resolver mis dudas de forma directa y sencilla por email. ¡Muchas gracias!',
      fr: 'Équipe très compétente. J\'ai pu poser mes questions directement et rapidement par e-mail. Merci à tous !'
    }
  },
  {
    id: '11',
    name: 'Stefan Hoffmann',
    role: {
      de: 'Finanzberater',
      en: 'Financial Consultant',
      es: 'Asesor Financiero',
      fr: 'Conseiller Financier'
    },
    location: 'Stuttgart, Deutschland',
    rating: 5,
    amount: '45.000 €',
    date: '04/05/2026',
    content: {
      de: 'Als Finanzfachmann schätze ich die Einhaltung der Datenschutzrichtlinien und die Transparenz.',
      en: 'As a financial professional, I appreciate the strict data protection and transparency.',
      es: 'Como profesional de las finanzas, valoro enormemente el cumplimiento del RGPD y la total transparencia.',
      fr: 'En tant que professionnel de la finance, j\'apprécie le respect strict de la confidentialité et la clarté.'
    }
  },
  {
    id: '12',
    name: 'Carmen Morales',
    role: {
      de: 'Wirtschaftsprüferin',
      en: 'Auditor',
      es: 'Auditora',
      fr: 'Auditrice'
    },
    location: 'Barcelona, España',
    rating: 5,
    amount: '22.000 €',
    date: '20/04/2026',
    content: {
      de: 'Sehr zufriedengestellt durch die Effizienz von Kredit Finanz Privat. Ein Musterbeispiel an Kundenorientierung.',
      en: 'Very satisfied by Kredit Finanz Privat\'s efficiency. A prime example of customer focus.',
      es: 'Muy satisfecha con la eficiencia de Kredit Finanz Privat. Un verdadero ejemplo de atención al cliente.',
      fr: 'Très satisfaite par l\'efficacité de Kredit Finanz Privat. Un modèle de service client.'
    }
  }
];

export interface FAQItem {
  question: { de: string; en: string; es: string; fr: string };
  answer: { de: string; en: string; es: string; fr: string };
}

export const FAQ_DATA: FAQItem[] = [
  {
    question: {
      de: 'Wie hoch ist der Zinssatz bei Kredit Finanz Privat?',
      en: 'What is the interest rate at Kredit Finanz Privat?',
      es: '¿Cuál es el tipo de interés en Kredit Finanz Privat?',
      fr: 'Quel est le taux d\'intérêt chez Kredit Finanz Privat ?'
    },
    answer: {
      de: 'Wir bieten einen festen Jahreszins von 3,00% p.a. für alle unsere Kreditarten an, unabhängig von der gewählten Laufzeit.',
      en: 'We offer a fixed annual interest rate of 3.00% p.a. for all our loan products, regardless of the chosen term.',
      es: 'Ofrecemos un tipo de interés anual fijo del 3,00% p.a. para todas nuestras soluciones de crédito, independientemente del plazo seleccionado.',
      fr: 'Nous proposons un taux annuel fixe de 3,00% p.a. sur l\'ensemble de nos offres de crédit, quelle que soit la durée.'
    }
  },
  {
    question: {
      de: 'Welcher Mindestbetrag kann beantragt werden?',
      en: 'What is the minimum loan amount that can be requested?',
      es: '¿Cuál es el importe mínimo que se puede solicitar?',
      fr: 'Quel est le montant minimum que l\'on peut demander ?'
    },
    answer: {
      de: 'Der Mindestkreditbetrag beträgt 3.000 €. Sie können Beträge von 3.000 € bis 50.000 € (bzw. mehr bei Immobilien) beantragen.',
      en: 'The minimum loan amount is €3,000. You can apply for amounts ranging from €3,000 up to €50,000 (or higher for real estate).',
      es: 'El importe mínimo del préstamo es de 3.000 €. Puede solicitar importes desde 3.000 € hasta 50.000 € (o más según el proyecto inmobiliario).',
      fr: 'Le montant minimum est de 3 000 €. Vous pouvez demander des montants allant de 3 000 € jusqu\'à 50 000 € (ou plus selon le projet).'
    }
  },
  {
    question: {
      de: 'Wie schnell erhalte ich eine Antwort auf meinen Antrag?',
      en: 'How fast will I receive a response to my application?',
      es: '¿Con qué rapidez recibiré respuesta a mi solicitud?',
      fr: 'En combien de temps reçois-je une réponse à ma demande ?'
    },
    answer: {
      de: 'Unser Expertenteam prüft Ihre Kreditanfrage innerhalb von 24 Stunden und kontaktiert Sie umgehend per E-Mail oder Telefon.',
      en: 'Our credit experts evaluate your application within 24 hours and contact you promptly via email or phone.',
      es: 'Nuestro equipo de especialistas evalúa su solicitud de crédito en un plazo de 24 horas y se comunica con usted por email o teléfono.',
      fr: 'Notre équipe d\'experts étudie votre dossier sous 24 heures et vous recontacte rapidement par e-mail ou téléphone.'
    }
  },
  {
    question: {
      de: 'Werden meine persönlichen Daten auf der Website gespeichert?',
      en: 'Is my personal data saved on the website?',
      es: '¿Se guardan mis datos personales en la página web?',
      fr: 'Mes données personnelles sont-elles enregistrées sur le site ?'
    },
    answer: {
      de: 'Nein. Aus Sicherheits- und Datenschutzgründen speichert Kredit Finanz Privat keinerlei persönliche Daten auf Webservern oder in Datenbanken. Das Formular sendet die Angaben direkt per verschlüsselter E-Mail via Resend.',
      en: 'No. For privacy and security reasons, Kredit Finanz Privat stores zero personal data on web servers or databases. The form sends data directly via encrypted email via Resend.',
      es: 'No. Por razones de confidencialidad y máxima seguridad, Kredit Finanz Privat no almacena ningún dato personal en servidores web ni bases de datos. El formulario transmite la información directamente por correo electrónico cifrado a través de Resend.',
      fr: 'Non. Par souci de confidentialité et de sécurité, Kredit Finanz Privat ne stocke aucune donnée sur les serveurs du site. Les informations sont envoyées directement par e-mail sécurisé via Resend.'
    }
  }
];
