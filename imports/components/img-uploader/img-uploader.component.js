import template from './img-uploader.template.html';

import { Images, Thumbs } from '../../api/images';

import { upload } from '../../api/images';

class ImgUploaderController {
    /*@ngInject*/
    constructor($scope, $reactive) {
        $reactive(this).attach($scope);

        this.subscribe('thumbs', () => [this.getReactively('imageId')]);

        this.helpers({
            thumb() {
                const id = this.getReactively('imageId');

                return Thumbs.findOne({
                    originalStore: 'images',
                    originalId: id
                });
            }
        });
    }

    addImages(files) {
        if (files.length) {
            this.currentFile = files[0];

            const reader = new FileReader;

            reader.onload = this.$bindToContext((e) => {
                this.cropImgSrc = e.target.result;
                this.myCroppedImage = '';
            });

            reader.readAsDataURL(files[0]);
        } else {
            this.cropImgSrc = undefined;
        }
    }

    save() {
        upload(this.myCroppedImage, this.currentFile.name, this.$bindToContext((file) => {
            if(this.imageId) {
                Images.remove(this.imageId);
            }
            this.imageId = file._id;
            this.reset();
        }), (e) => {
            console.log('Loading error', e);
        });
    }

    reset() {
        this.cropImgSrc = undefined;
        this.myCroppedImage = '';
    }
}

const ImgUploaderComponent = {
    templateUrl: 'imports/components/img-uploader/img-uploader.template.html',
    controller: ImgUploaderController,
    controllerAs: 'ctrl',
    bindings: {
        imageId: '=?'
    }
};

export default ImgUploaderComponent;
