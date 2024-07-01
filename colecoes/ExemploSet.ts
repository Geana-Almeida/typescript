const frutas: Set<string> = new Set<string>();//set n permite add elementos iguais, e n tem indice.

frutas.add("Kiwi");
frutas.add("Caqui");
frutas.add("Manga");
frutas.add("Caqui");

console.table(frutas);

console.log(`\nA fruta Caqui existe: ${frutas.has("Caqui")}`);

frutas.delete("Caqui");

console.table(frutas);