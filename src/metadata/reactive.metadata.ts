import { Metadata } from 'injectomat/metadata/metadata';
import { ReactiveType } from '../types/reactive.type';

export const ReactiveMetadata = new Metadata<ReactiveType>("injectomat:reactive", ReactiveType.Shallow);
