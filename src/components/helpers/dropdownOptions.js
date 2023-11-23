export const translation = {
    functionality: {
      all: 'Wszystkie',
      addwash: 'Drzwi AddWash',
      'AI Control': 'Panel AI Control',
      inwerterowy: 'Inwerterowy',
      wyświetlacz: 'Wyświetlacz elektroniczny',
    },
    energy: {
      all: 'Wszystkie',
      a: 'A',
      b: 'B',
      c: 'C',
    },
    copacity: {
      all: 'Wszystkie',
      '9': '9 kg',
      '8': '8 kg',
      '10.5': '10.5 kg',
    },
    category: {
      all: 'Wszystkie',
      price: 'Cena',
      copacity: 'Pojemnosc',
    },
};

export const categoryOptions = [
    { value: 'all', label: 'Wszystkie', className: 'dropdown-item', name: 'name' },
    { value: 'price', label: 'Cena', className: 'dropdown-item' },
    { value: 'copacity', label: 'Pojemnosc', className: 'dropdown-item' },
];

export const functionalityOptions = [
    { value: 'all', label: 'Wszystkie' },
    { value: 'addwash', label: 'Drzwi AddWash' },
    { value: 'AI Control', label: 'Panel AI Control' },
    { value: 'inwerterowy', label: 'Inwerterowy' },
    { value: 'wyświetlacz', label: 'Wyświetlacz elektroniczny' },
  ];

export const energyOptions = [
    { value: 'all', label: 'Wszystkie' },
    { value: 'a', label: 'A' },
    { value: 'b', label: 'B' },
    { value: 'c', label: 'C' },
  ];

export const copacityOptions = [
    { value: 'all', label: 'Wszystkie' },
    { value: '9', label: '9 kg' },
    { value: '8', label: '8 kg' },
    { value: '10.5', label: '10.5 kg' },
  ];