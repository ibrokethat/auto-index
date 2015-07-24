import path from 'path';
import fs from 'fs';
import CONF from 'config';

const __MAIN__ = CONF.has('autoRun') ? CONF.get('autoRun') : true;


export default function autoIndex () {

	if (!CONF.has('appPath')) {

		throw new ReferenceError('');
	}

	const appPath = path.resolve(process.cwd(), CONF.appPath);

	indexDir(appPath);
}


function indexDir (dir) {


	const files = fs.readdirSync(dir);

	const indexFile = files.find((file) => /^auto\.index/.test(file));

	if (indexFile) {

		const [, indexType] = /auto\.index\.(\w+)/.exec(indexFile);

		const parts = files.reduce((acc, file) => {

			const m = /^(?!auto\.index\.js)(.+)\.js$/.exec(file);

			if (m) {

				const [imports, exports] = write[indexType](m[1]);

				acc.unshift(imports);
				acc.push(exports);
			}

			return acc;

		}, []);

		fs.writeFileSync(`${dir}/auto.index.js`, parts.join('\n'));
	}


	//	recurse
	for (let file of files) {

		const subDir = `${dir}/${file}`;

		const stats = fs.statSync(subDir);

		if (stats.isDirectory()) {

			indexDir(subDir)
		}
	}
}


const write = {

	named (filename) {

		return [
			`import * as ${filename} from './${filename}';`,
			`export {${filename} as ${filename}};`
		]
	},

	default (filename) {

		return [
			`import ${filename} from './${filename}';`,
			`export {${filename} as ${filename}};`
		]

	}
}


if (__MAIN__) {
	autoIndex();
}

