import { Controller, Get } from '@nestjs/common';
import { JSONFile } from 'lowdb/lib';
import { Low } from 'lowdb/lib/Low';

@Controller('lowdb')
export class LowdbController {

    @Get()
    getSampleData() {
        type Data = {
            posts: string[] // Expect posts to be an array of strings
        }
        const adapter = new JSONFile<Data>('db.json')
        const db = new Low<Data>(adapter)

        db.data
            .posts
            .push('test'); // TypeScript error 🎉
        return true;
    }
}
