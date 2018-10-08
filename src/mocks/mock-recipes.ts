import { CuisineType } from 'src/app/core/enums/cuisine-type.enum';
import { DifficultyLevel } from 'src/app/core/enums/difficulty-level.enum';
import { Recipe } from 'src/app/core/models/recipe';

export const recipes: Recipe[] = [
    {
        id: 1,
        userId: 1,
        name: 'Jajecznica',
        description: 'Wbij jajka, mieszaj aż będzie gotowe',
        imageUrl: 'https://i.wpimg.pl/O/644x429/d.wpimg.pl/1742197115--537064326/jajecznica.jpeg',
        ingredientsList: [
            {
                id: 1,
                userId: 1,
                name: 'Jajko',
                quantity: 5,
                unit: 'szt.'
            },
            {
                id: 2,
                userId: 1,
                name: 'Masło',
                quantity: 15,
                unit: 'g'
            }
        ],
        time: 90,
        cuisine: CuisineType.Polish,
        portions: 2,
        level: DifficultyLevel.Easy,
        isVege: false
    },
    {
        id: 2,
        userId: 1,
        name: 'Spaghetti Carbonara',
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Cras congue quis tellus eget varius. Nam ut condimentum libero.
        Praesent quis orci eu nunc convallis condimentum sit amet non tellus.
        Integer quam massa, imperdiet eget justo eu, malesuada ultrices ex.
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
        Fusce volutpat erat est, sit amet bibendum nisi fringilla eleifend. Cras ex magna, mattis eget mattis ac, vehicula ut est.
        Phasellus tempor augue a augue hendrerit aliquet. Pellentesque quis feugiat dolor. Nullam et erat nec justo tristique aliquet.

        Vestibulum suscipit tincidunt elit, nec tristique neque pulvinar eget.Etiam ante enim, facilisis a orci at,
        ultrices posuere ex.Mauris eu eleifend mauris, quis maximus sapien.In hac habitasse platea dictumst
        Praesent eu neque sit amet tortor mollis consequat.Cras velit eros, ultricies gravida magna in, volutpat lobortis elit.
        Phasellus vel fringilla ante, vitae molestie nibh.Quisque faucibus molestie iaculis.Donec vitae nulla arcu.
        Morbi venenatis convallis nulla, quis ultricies felis ullamcorper sit amet.Suspendisse egestas varius feugiat.
        Cras varius imperdiet dolor ut tempus.Nam sit amet erat vel dui cursus cursus eget sed magna.
        Sed molestie augue ac arcu varius gravida.Maecenas at efficitur risus.Sed malesuada ante eu sapien sollicitudin luctus.`,
        imageUrl: 'https://www.opowiastka.com/wp-content/uploads/2018/05/carbonara.jpeg',
        ingredientsList: [
            {
                id: 1,
                userId: 1,
                name: 'Jajko',
                quantity: 2,
                unit: 'szt.'
            },
            {
                id: 3,
                userId: 1,
                name: 'Makaron',
                quantity: 300,
                unit: 'g'
            },
            {
                id: 4,
                userId: 1,
                name: 'Boczek',
                quantity: 200,
                unit: 'g'
            },
            {
                id: 5,
                userId: 1,
                name: 'Śmietana',
                quantity: 500,
                unit: 'ml'
            }
        ],
        time: 30,
        cuisine: CuisineType.Italian,
        portions: 2,
        level: DifficultyLevel.Medium,
        isVege: false
    },
];
