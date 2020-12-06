// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import field from '@nozbe/watermelondb/decorators/field';
import Model, {Associations} from '@nozbe/watermelondb/Model';

import {MM_TABLES} from '@constants/database';

export default class File extends Model {
    static table = MM_TABLES.SERVER.FILE
    static associations: Associations = {
        [MM_TABLES.SERVER.POST]: {type: 'belongs_to', key: 'post_id'},
    }

    @field('extension') extension!: string
    @field('file_id') fileId!: string
    @field('height') height!: number
    @field('image_thumbnail') imageThumbnail!: string
    @field('local_path') localPath!: string
    @field('mime_type') mimeType!: string
    @field('name') name!: string
    @field('post_id') postId!: string
    @field('size') size!: number
    @field('width') width!: number
}