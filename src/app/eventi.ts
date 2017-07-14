export class Eventi {
	_id?: string;
	nome: string;
	data: Date;
	oraInizio: string;
	oraFine: string;
	luogo?: string;
	descrizione: string;
	fotoMin: File;
	foto: File;
	galleria?: any[];
}
