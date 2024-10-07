// creating a data file for holding the car-types values

interface CarData {
    id: number,
    name: string,
    imagePath: string
}

export const carData: CarData[] = [
    {
        id: 1,
        name: 'Toyota Camry',
        imagePath: '/assets/toyota-camry.jpeg',
      },
      {
        id: 2,
        name: 'Honda Civic',
        imagePath: '/assets/honda-civic.jpeg',
      },
      {
        id: 3,
    name: 'Ford Mustang',
    imagePath: '/assets/ford.avif',
      },
      {
        id: 4,
    name: 'Nissan Altima',
    imagePath: '/assets/nissan-altima.avif',
      },
      {
        id: 5,
    name: 'Chevrolet Silverado',
    imagePath: '/assets/chevrolet.avif'
      }
]