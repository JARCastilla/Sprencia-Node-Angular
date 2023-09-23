// Creamos la interfaz para acceder a los datos de Actividades
export interface Activity {
  id?: number,
  titulo: string,
  descripcion: string,
  resumen: string,
  ciudades: string,
  precio: number,
  images: string[],
  categorias: string
}
