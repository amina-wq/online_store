import uuid

from django.utils.translation import gettext_lazy as _
from django.utils import timezone
from django.db import models


class UUIDMixin(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)

    class Meta:
        abstract = True


class Category(UUIDMixin):
    name = models.CharField(
        max_length=100, db_index=True, verbose_name=_("Name")
    )

    def __str__(self):
        return self.name


class Basket(UUIDMixin):
    category = models.ManyToManyField(
        Category, through="BasketCategory", verbose_name=_("Category")
    )
    title = models.CharField(max_length=150, verbose_name=_("Title"))
    description = models.TextField(verbose_name=_("Description"))
    date_time = models.DateTimeField(
        default=timezone.now, verbose_name=_("Date-Time")
    )
    price = models.FloatField(verbose_name=_("Price"), default=0)
    image = models.CharField(
        default="https://c.wallhere.com/photos/2c/db/"
        "2880x1800_px_Futurama_Memes_Philip_J_Fry-1275101.jpg!d"
    )

    class Meta:
        verbose_name = _("Basket")
        verbose_name_plural = _("Baskets")

    def __str__(self):
        return self.title


class BasketCategory(UUIDMixin):
    basket = models.ForeignKey(Basket, on_delete=models.CASCADE)
    category = models.ForeignKey(Category, on_delete=models.PROTECT)
