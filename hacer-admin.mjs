// uso: node hacer-admin.mjs <apodo>
import { DatabaseSync } from 'node:sqlite'; import path from 'node:path'; import { fileURLToPath } from 'node:url';
const db = new DatabaseSync(path.join(path.dirname(fileURLToPath(import.meta.url)), 'foro.db')), r = db.prepare('UPDATE usuarios SET admin=1 WHERE nick=?').run(process.argv[2] ?? ''); console.log(r.changes ? 'Listo: ahora modera.' : 'No existe ese apodo.');
